import {
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputHandler from './src/components/InputHandler';
import TodosList from './src/components/TodosList';
import {TodoProvider} from './src/context/TodoContext';
import {moderateScale, scale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  let {width} = Dimensions.get('window');
  const [todo, setTodo] = useState([]);

  const addTodo = todo => {
    setTodo(prev => [{id: Date.now(), ...todo}, ...prev]);
  };
  const editTodo = (id, todo) => {
    setTodo(prev =>
      prev.map(prevTodo => (prevTodo?.id == id ? todo : prevTodo)),
    );
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(prevTodo => prevTodo.id !== id));
  };
  const handleComplet = id => {
    setTodo(prev =>
      prev?.map(prevTodo =>
        prevTodo.id == id
          ? {...prevTodo, isComplete: !prevTodo.isComplete}
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    (async () => {
      let getTodo = await AsyncStorage.getItem('todos');
      let todos = JSON.parse(getTodo);
      if (todos && todos.length > 0) {
        setTodo(todos);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('todos', JSON.stringify(todo));
    })();
  }, [todo]);

  return (
    <TodoProvider value={{todo, addTodo, editTodo, deleteTodo, handleComplet}}>
      <SafeAreaView style={styles.container}>
        <View style={[styles.TodoSection, {width: width}]}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
          <Text style={styles.hed}>Todo List</Text>
          <View srtyle={styles.inputContainer}>
            <InputHandler />
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={todo}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => <TodosList todo={item} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </TodoProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  TodoSection: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  hed: {
    fontSize: scale(25),
    color: '#000',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Bold',
  },
});

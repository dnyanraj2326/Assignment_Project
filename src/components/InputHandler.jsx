import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { useTodo } from '../context/TodoContext';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const InputHandler = () => {
  const [todo, setTodo] = useState('');
  let {addTodo} = useTodo();
  const handleInput = () => {
    if(todo.trim() == "") return;
    addTodo({todo,isComplete:false,});
    setTodo('')
  }
  return (
    <View>
      <View style={styles.container}>
      <Image
        source={require('../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Add a new todo"
        style={styles.input}
        value={todo}
        onChangeText={text => setTodo(text)}
      />
      </View>
      <TouchableOpacity style={styles.btn}  onPress={handleInput}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputHandler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  input: {
    fontSize:scale(14),
    fontFamily: 'LexendDeca-Regular',
    color: '#000',
    flex: 1,
    paddingVertical:moderateVerticalScale(14)
  },
  searchIcon: {
    width: moderateScale(25),
    height: moderateVerticalScale(25),
    marginRight: 5,
  },
  btn:{
    paddingHorizontal:moderateScale(20),
    paddingVertical:moderateVerticalScale(12),
    backgroundColor:"#000",
    borderRadius:14,
    marginHorizontal:moderateVerticalScale(90),
    marginTop:moderateScale(20),
  },
  btnText:{
    color:"#FFF",
    textAlign:"center",
    fontFamily: 'LexendDeca-SemiBold',
    fontSize:scale(16)
  }
});

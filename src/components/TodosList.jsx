import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {useTodo} from '../context/TodoContext';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const TodosList = ({todo}) => {
  let {editTodo, handleComplet,deleteTodo} = useTodo();
  const [isEditable, setIsEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(todo?.todo)
  let handleCompletTodo = id => {
    handleComplet(id);
  };
  let handleEditTodo = () => {
    editTodo(todo.id, {...todo, todo:newTodo});
    setIsEditable(false)
  };
  return (
    <View style={[styles.container,isEditable?{borderWidth:1,borderColor:'#EEF5FF'}:{}]}>
      <View style={styles.leftSection}>
        <TouchableOpacity
        disabled={isEditable}
          style={styles.checkIconSection}
          onPress={() => handleCompletTodo(todo.id)}>
          <Image
            source={require('../assets/icons/check.png')}
            style={[
              styles.checkIcon,
              todo?.isComplete ? {tintColor: 'green'} : {},
            ]}
          />
        </TouchableOpacity>
        {
          isEditable ?
          <TextInput
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          style={styles.todoTitleEdit}
        />
        :
        <Text style={[styles.todoTitle,todo?.isComplete
          ? {textDecorationLine: 'line-through', color: 'gray'}
          : {},
      ]}>{todo?.todo}</Text>
        }
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
        disabled={todo.isComplete}
          style={styles.editIconSection}
          onPress={() => {
            if(todo?.isComplete) return;
            if(isEditable){
            handleEditTodo()
            }else{
              setIsEditable((prev) => !prev)
            }
            }}>
          <Image
            source={isEditable ? require('../assets/icons/editing.png') : require('../assets/icons/edit.png')}
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.delIconSection} onPress={() => deleteTodo(todo.id)}>
          <Image
            source={require('../assets/icons/delete.png')}
            style={styles.delIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodosList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    paddingHorizontal:moderateScale(10),
    backgroundColor: '#fff',
    marginTop:moderateVerticalScale(20),
    borderRadius: 10,
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    width: moderateScale(30),
    height: moderateVerticalScale(30),
    tintColor: '#e0e0e0',
    marginRight: moderateScale(5),
  },
  editIcon: {
    width: moderateScale(24),
    height: moderateVerticalScale(24),
    marginHorizontal: moderateScale(5),
  },
  delIcon: {
    width: moderateScale(23),
    height: moderateVerticalScale(23),
    tintColor: 'red',
  },
  todoTitle: {
    fontSize:scale(14),
    fontFamily: 'LexendDeca-SemiBold',
    color: '#000',
    marginTop:moderateVerticalScale(-3),
    flex:0.8
  },
  todoTitleEdit:{
    fontSize: scale(14),
    fontFamily: 'LexendDeca-SemiBold',
    color: '#092635',
    flex:0.8,
  }
});

import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const InputComp = ({
    placeholder="",
    onChangeText,
    style={}
}) => {
  return (
    <View>
     <TextInput
     placeholder={placeholder}
     onChangeText={onChangeText}
    style={styles.inputSty}
     />
    </View>
  )
}

export default InputComp

const styles = StyleSheet.create({
    inputSty:{
        height:52,
        backgroundColor:'#e0e0e0',
        borderRadius:12,
        paddingHorizontal:16,
        marginBottom:20
    }
})
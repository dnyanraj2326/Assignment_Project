import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const WraperContainer = ({
    children,
    style={}
}) => {
  return (
    <View style={{...styles.container, ...style}} >
        <SafeAreaView style={{flex:1}}>
            {children}
        </SafeAreaView>
    </View>
  )
}

export default WraperContainer

const styles = StyleSheet.create({
    container:{
        padding:moderateScale(16),
        backgroundColor:"#fff",
        flex:1
    }
})
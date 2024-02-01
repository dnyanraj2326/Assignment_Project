import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreeen from '../screens/SplashScreeen';
import Login from '../screens/Login';


const AuthNavigation = () => {
    let AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='splashScreen' component={SplashScreeen} options={{headerShown:false}} />
        <AuthStack.Screen name='login' component={Login} options={{headerShown:false}}/>
    </AuthStack.Navigator>
  )
}

export default AuthNavigation
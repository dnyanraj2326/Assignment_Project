import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import SplashScreeen from '../screens/SplashScreeen';
import Login from '../screens/Login';
import AddEmployee from '../screens/AddEmployee';

const StackNavigation = () => {
    let Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='splashScreen' component={SplashScreeen} options={{headerShown:false}} />
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='addEmployee' component={AddEmployee} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default StackNavigation
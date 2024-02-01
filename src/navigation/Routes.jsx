import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
import AuthNavigation from './AuthNavigation'
import { getStoreData } from '../utils/helperFunction'

const Routes = () => {
  return (
    
   <NavigationContainer>
     <StackNavigation/> 
   </NavigationContainer>
  )
}

export default Routes
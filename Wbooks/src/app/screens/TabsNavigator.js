import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator  ();

export default function TabNavigator() {
  return(
    <TabNavigator>
        <Tab.Screen name = "Home" component={StackNavigator}/> 
    </TabNavigator>
  )

}
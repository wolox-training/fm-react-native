import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import dummyScreenContainer from '../dummyScreen';

import StackNavigator from './stackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={StackNavigator} />
      <Tab.Screen name="WishList" component={dummyScreenContainer} />
    </Tab.Navigator>
  );
}

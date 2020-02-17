import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './StackNavigator';
import dummyScreenContainer from './dummyScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={StackNavigator} />
      <Tab.Screen name="WishList" component={dummyScreenContainer} />
    </Tab.Navigator>
  );
}

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import dummyScreenContainer from '../dummyScreen';

import StackNavigator from './stackNavigator';
import TabBarIcon from './components/tabBarIcon';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Library}
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.Library} />
        }}
      />
      <Tab.Screen
        name={routes.WishList}
        component={dummyScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.WishList} />
        }}
      />
      <Tab.Screen
        name={routes.AddNew}
        component={dummyScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.AddNew} />
        }}
      />
      <Tab.Screen
        name={routes.Rental}
        component={dummyScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.Rental} />
        }}
      />
      <Tab.Screen
        name={routes.Settings}
        component={dummyScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.Settings} />
        }}
      />
    </Tab.Navigator>
  );
}

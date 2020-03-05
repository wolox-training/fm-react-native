import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { defaultNavOptions } from '../../../config/navigationOptions';
import dummyScreenContainer from '../dummyScreen';

import StackNavigator from './libraryStackNavigator';
import MyRentalsStackNavigator from './myRentalsStackNavigator';
import TabBarIcon from './components/tabBarIcon';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  console.tron.log('hola');
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
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} route={routes.WishList} />,
          header: defaultNavOptions(null, null, 'title').header,
          headerStyle: defaultNavOptions(null, null, 'title').headerStyle
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
        component={MyRentalsStackNavigator}
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

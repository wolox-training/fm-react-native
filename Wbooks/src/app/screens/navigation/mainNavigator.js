import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../logIn/index';

import Home from './tabsNavigator';
import routes from './routes';

const Stack = createStackNavigator();

function LibraryStackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.LogIn} component={LogIn} />
      <Stack.Screen name={routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default LibraryStackNavigator;

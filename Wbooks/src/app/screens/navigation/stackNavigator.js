import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Library from '../library/components/bookList';
import BookDetail from '../bookDetail';
import { defaultNavOptions } from '../../../config/navigationOptions';

import routes from './routes';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Library} component={Library} options={defaultNavOptions} />
      <Stack.Screen name={routes.BookDetail} component={BookDetail} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

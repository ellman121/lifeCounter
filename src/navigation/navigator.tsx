import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>
);

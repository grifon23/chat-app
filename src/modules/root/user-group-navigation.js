import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../tasks/page/HomePage';
import {Login} from '../auth/components/Login';

const Stack = createNativeStackNavigator();

export const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

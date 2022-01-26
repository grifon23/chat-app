import React, {useContext} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TasksPage} from '../tasks/page/TasksPage';
import {Login} from '../auth/components/Login';
import {AuthContext} from '../auth/context/auth-context';
import {Dashboard} from '../card/screen/card-screen';
import {CreateCard} from '../card/components/create-card';
import {CreateCardScreen} from '../card/screen/create-card';

const Stack = createNativeStackNavigator();
export const Routers = () => {
  const app = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="cards"
          component={Dashboard}
          // options={{headerShown: false}}
        />

        <Stack.Screen
          name="tasks"
          component={TasksPage}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="createCard"
          component={CreateCardScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

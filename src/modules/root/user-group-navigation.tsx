// import React, {useContext} from 'react';
// import {Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {HomePage} from '../tasks/page/HomePage';
// import {Login} from '../auth/components/Login';
// import {FullTask} from '../tasks/components/full-task';
// import {AuthContext} from '../auth/context/auth-context';

// const Stack = createNativeStackNavigator();
// export const Routers = () => {
//   const app = useContext(AuthContext);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomePage}
//           // options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="FullTask"
//           component={FullTask}
//           // options={{headerShown: false}}
//         />

//         <Stack.Screen
//           name="Login"
//           component={Login}
//           // options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

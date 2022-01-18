// import React, {FC, useState, useContext} from 'react';
// import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {InputText} from '../../../shared/components/inputText';
// import {AuthContext} from '../context/auth-context';

// type Props = {
//   navigation: any;
// };

// export const Login: FC<Props> = ({navigation}) => {
//   const [user, setUser] = useState('');

//   const autorization = () => {
//     navigation.navigate('Home', {user: user});
//     setUser('');
//   };
//   const onChange = (text: string) => {
//     setUser(text);
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <InputText
//           value={user}
//           placeholder="enter your name ..."
//           onChange={onChange}
//           keyboardType={'default'}
//           style={styles.input}
//         />

//         <Button title="Login" onPress={autorization} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   content: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     height: 35,
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     fontSize: 15,
//     borderRadius: 10,
//     borderColor: '#2427',
//   },
// });

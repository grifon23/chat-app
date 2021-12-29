import React, {FC, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';

type Props = {
  navigation: any;
};

export const Login: FC<Props> = ({navigation}) => {
  const [user, setUser] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={user}
          onChangeText={text => setUser(text)}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate('Home', {user: user})}
        />
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 2,
    height: 25,
    flex: 1,
  },
});

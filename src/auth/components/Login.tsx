import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

type Props = {
  user: string;
  setUser: any;
  onLogin: () => string;
};

export const Login: FC<Props> = ({user, setUser, onLogin}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={user}
          onChangeText={setUser}
        />
        <Button title="Login" onPress={onLogin} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
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

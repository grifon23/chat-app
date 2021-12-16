import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export const ChatList: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Eduard</Text>
      <Text>Lisa</Text>
      <Text>Homer</Text>
      <Text>Bart</Text>
      <Text>March</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  content: {},
});

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import {dataTasks} from '../../config/dataTasks';

export const TasksPage = ({navigation, route}: any) => {
  useEffect(() => {}, []);
  const card = route.params;

  return (
    <View style={styles.container}>
      <Text>Hello: {card.item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 19,
  },
  backBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#2021',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

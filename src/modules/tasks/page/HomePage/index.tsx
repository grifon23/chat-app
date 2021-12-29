import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TasksList} from '../../components/tasks-list';

export const HomePage = ({navigation, route}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>
        Welcome home:
        {
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            {route.params?.user}
          </Text>
        }
      </Text>
      <TasksList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  backBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#2021',
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

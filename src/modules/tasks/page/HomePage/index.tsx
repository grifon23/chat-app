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
import {TasksList} from '../../components/tasks-list';

export const HomePage = ({navigation, route}: any) => {
  useEffect(() => {}, []);
  const name = route.params.user;
  console.log('name', name);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10}}>
            Welcom home: {name ? name : 'Users'}
          </Text>
          <Text style={{fontWeight: '600', fontSize: 20}}></Text>
        </View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>

      <TasksList />
      <Button title="Enter" onPress={() => navigation.navigate('FullTask')} />
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

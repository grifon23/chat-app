import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {TasksList} from '../../components/tasks-list';

export const HomePage = ({navigation, route}: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10}}>Welcom home:</Text>
          <Text style={{fontWeight: '600', fontSize: 20}}>
            {route.params.user}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>

      <TasksList />
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

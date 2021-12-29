import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {dataTasks} from '../config/dataTasks';
import {TaskItem} from './taskItem';

export const TasksList = () => {
  const [tasks, setTasks] = useState(dataTasks);

  return (
    <ScrollView style={{marginTop: 20, marginBottom: 100}}>
      {tasks.map(item => (
        <TaskItem item={item} />
      ))}
    </ScrollView>
  );
};

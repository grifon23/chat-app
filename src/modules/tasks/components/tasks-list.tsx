import React, {useState} from 'react';
import {
  ScrollView,
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
} from 'react-native';
import {dataTasks} from '../config/dataTasks';
import {TaskItem} from './taskItem';

export const TasksList = () => {
  const [tasks, setTasks] = useState(dataTasks);
  const {width} = Dimensions.get('window');
  const ITEM_SIZE = width * 0.9;
  const renderItem = ({item}: any) => <TaskItem item={item} />;
  const separatorItem = () => <View style={{width: 22}} />;
  return (
    <SafeAreaView style={{marginBottom: 100}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={separatorItem}
        decelerationRate={0}
        bounces={false}
        pagingEnabled
        snapToInterval={ITEM_SIZE}
        horizontal
        windowSize={1}
        data={tasks}
        keyExtractor={(_, index) => `${index}-listItem`}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

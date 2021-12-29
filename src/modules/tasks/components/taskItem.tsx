import React, {FC} from 'react';
import {Text, View} from 'react-native';
type ItemProps = {
  item: {
    title: string;
    description: string;
    id: number;
  };
};
export const TaskItem: FC<ItemProps> = ({item}) => {
  return (
    <View
      style={{
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        borderColor: '#2427',
        borderWidth: 1,
      }}>
      <Text style={{marginBottom: 10}}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

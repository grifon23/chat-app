import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
type ItemProps = {
  item: {
    title: string;
    description: string;
    id: number;
  };
};
export const TaskItem: FC<ItemProps> = ({item}) => {
  const {width: screenWidth} = Dimensions.get('screen');
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: '#2427',
        borderWidth: 1,
        width: 0.85 * screenWidth,
      }}>
      <Text style={{marginBottom: 10}}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

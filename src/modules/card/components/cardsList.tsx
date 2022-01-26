import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {dataCard} from '../configs/card-data';
import {Card} from './card';
interface IProps {
  cards: any;
  navigation: any;
  delCard: any;
}
export const Cards: FC<IProps> = ({cards, delCard, navigation}) => {
  const renderItem = ({item}: any) => {
    return (
      <Card
        onPress={() => {
          navigation.navigate('tasks', {item});
        }}
        card={item}
        delCard={delCard}
      />
    );
  };
  return (
    <View style={{height: '100%'}}>
      <FlatList
        // style={{maxHeight: '100%'}}
        data={cards}
        renderItem={renderItem}
      />
    </View>
  );
};

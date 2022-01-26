import React, {FC, useState} from 'react';
import {Button, Image, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Cards} from '../components/cardsList';
import {CreateCard} from '../components/create-card';
import {dataCard} from '../configs/card-data';
import moment from 'moment';
import {AddIcon} from '../../../shared/elements/addIcon';
import {ScreenLayouts} from '../../../shared/components/layouts';
import {Calendars} from '../components/calendars';
interface IProps {
  navigation: any;
}
export const Dashboard: FC<IProps> = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const addCards = (value: any) => {
    const newCard = {
      title: value.title,
      description: value.description,
      id: value,
      created: moment().format('l'),
    };
    setCards((oldState: any) => [...oldState, newCard]);
  };

  const delCard = (id: any) => {
    setCards(cards.filter((it: any) => it.id !== id));
  };
  return (
    <ScreenLayouts
      paddingHorizontal={15}
      onPressAdd={() => navigation.navigate('createCard', {addCards})}>
      {/* <Calendars items={cards} /> */}
      <View>
        <Cards cards={cards} navigation={navigation} delCard={delCard} />
      </View>
    </ScreenLayouts>
  );
};

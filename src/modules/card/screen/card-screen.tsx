import React, {FC, useState} from 'react';
import {Button, Image, ImageBackground, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Cards} from '../components/cardsList';
import {CreateCard} from '../components/create-card';
import {dataCard} from '../configs/card-data';
import moment from 'moment';
import {AddIcon} from '../../../shared/elements/addIcon';
import {ScreenLayouts} from '../../../shared/components/layouts';
import {Calendars} from '../components/calendars';
import {Text} from 'react-native-svg';
interface IProps {
  navigation: any;
}
export const Dashboard: FC<IProps> = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const addCards = (value: any) => {
    const newCard: {
      title: string;
      description: string;
      id: string;
      created: string;
    } = {
      title: value.title,
      description: value.description,
      id: value,
      created: moment().format('l'),
    };
    setCards(arr => [...arr, newCard]);
  };

  const delCard = (id: any) => {
    setCards(cards.filter((it: any) => it.id !== id));
  };
  return (
    <ScreenLayouts
      paddingHorizontal={13}
      onPressAdd={() => navigation.navigate('createCard', {addCards})}>
      {cards.length > 0 ? (
        <Cards cards={cards} navigation={navigation} delCard={delCard} />
      ) : (
        <View
          style={{
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/board-card.png')}
            height={400}
            width={400}
            style={{height: 450, width: 365, marginBottom: 30}}
          />

          <Image
            source={require('../../../assets/downArrow.png')}
            height={900}
            width={30}
            style={{
              height: 75,
              width: 36,
              opacity: 0.25,
              tintColor: '#FF0056',
            }}
          />
        </View>
      )}
    </ScreenLayouts>
  );
};

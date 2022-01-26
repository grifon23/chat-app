import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CreateCard} from '../components/create-card';
interface IProps {
  route: any;
}
export const CreateCardScreen: FC<IProps> = ({route}) => {
  return (
    <View>
      <CreateCard addCards={route.params.addCards} />
    </View>
  );
};

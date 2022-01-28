import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Image} from 'react-native';
import {CreateCard} from '../components/create-card';
interface IProps {
  route: any;
}
export const CreateCardScreen: FC<IProps> = ({route}) => {
  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 20}}>
        <Image
          source={require('../../../assets/writing-man.png')}
          height={300}
          width={300}
          style={{
            height: 220,
            width: '70%',
          }}
        />
      </View>

      <CreateCard addCards={route.params.addCards} />
    </View>
  );
};

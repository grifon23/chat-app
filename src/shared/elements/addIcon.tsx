import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface IProps {
  onPress?: () => void;
}
export const AddIcon: FC<IProps> = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          height: 80,
          width: 80,

          tintColor: '#FF3378',
        }}
        height={50}
        width={50}
        source={require('../../assets/add-button.png')}
      />
    </TouchableOpacity>
  );
};

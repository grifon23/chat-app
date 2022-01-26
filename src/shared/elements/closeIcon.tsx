import React, {FC} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
interface IProps {
  onPress?: () => void;
}
export const CloseIcon: FC<IProps> = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          height: 40,
          width: 40,

          tintColor: '#00000',
        }}
        height={20}
        width={20}
        source={require('../../assets/clear.png')}
      />
    </TouchableOpacity>
  );
};

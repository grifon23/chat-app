import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {AddIcon} from '../elements/addIcon';
interface IProps {
  paddingHorizontal: any;
  onPressAdd: () => void;
}
export const ScreenLayouts: FC<IProps> = ({
  children,
  paddingHorizontal,
  onPressAdd,
}: any) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingHorizontal,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height * 0.8,
      }}>
      {children}
      <View style={{alignItems: 'center'}}>
        <AddIcon onPress={onPressAdd} />
      </View>
    </View>
  );
};

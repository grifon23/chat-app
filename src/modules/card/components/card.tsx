import React, {FC} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {CloseIcon} from '../../../shared/elements/closeIcon';

interface IProps {
  onPress: () => void;
  card: any;
  delCard: any;
}
export const Card: FC<IProps> = ({card, onPress, delCard}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>{card.created}</Text>
        <Text>{card.title}</Text>
        <CloseIcon
          onPress={() => {
            delCard(card.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: '#FF3378',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
  },
});

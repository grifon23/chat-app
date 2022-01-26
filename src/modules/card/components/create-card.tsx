import React, {FC, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
interface IProps {
  addCards: any;
}
export const CreateCard: FC<IProps> = ({addCards}) => {
  const [value, setValue] = useState({
    title: '',
    description: '',
  });

  return (
    <View
      style={{
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Имя задачи..."
          value={value.title}
          onChangeText={text => setValue({...value, title: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Описание задачи..."
          value={value.description}
          onChangeText={text => setValue({...value, description: text})}
        />

        <Button
          color={'#FF3378'}
          onPress={() => {
            addCards(value);
          }}
          title="Добавить"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(28, 32, 46, 0.08)',
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'column',
    marginTop: 200,
  },
  input: {
    borderBottomWidth: 1,
    width: '90%',
    marginVertical: 30,
    borderBottomColor: 'rgba(28, 32, 46, 0.24)',
    height: 30,
    fontSize: 20,

    fontWeight: '700',
  },
});

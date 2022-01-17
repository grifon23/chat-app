import React, {FC, useState} from 'react';
import {KeyboardTypeOptions, TextInput, ViewStyle} from 'react-native';

interface IProps {
  value: string;
  style?: ViewStyle;
  keyboardType: KeyboardTypeOptions;
  onChange?: (text: string) => void;
  placeholder: string;
}

export const InputText: FC<IProps> = ({
  value,
  style,
  onChange,
  keyboardType,
  placeholder,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      value={value}
      onChangeText={onChange}
      keyboardType={keyboardType}
    />
  );
};

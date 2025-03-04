import React, {FC} from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';
import {black, grey, grey100} from '../utils/AppColors';

type customTextfieldProps = {
  placeHolder: string;
  onChangeText: (text: string) => void;
  textFieldStyle: StyleProp<TextStyle>;
};

const CustomTextField: FC<customTextfieldProps> = props => {
  const {onChangeText, placeHolder, textFieldStyle} = props;
  return (
    <TextInput
      placeholder={placeHolder}
      style={[styles.textField, textFieldStyle]}
      placeholderTextColor={grey100}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  textField: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: black,
    borderBottomColor: grey,
    borderBottomWidth: 1,
  },
});

import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {purple, white} from '../utils/AppColors';

interface customTextButtonProps {
  title: string;
  onPress: () => void;
}

const CustomTextButton: FC<customTextButtonProps> = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomTextButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: 48,
    backgroundColor: purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: white,
    fontWeight: '600',
  },
});

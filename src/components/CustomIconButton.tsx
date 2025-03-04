import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {purple, purple100, white} from '../utils/AppColors';

interface customButtonProps {
  disable?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomIconButton: FC<customButtonProps> = props => {
  const {disable, onPress} = props;

  const getColor = (): string => {
    if (disable) {
      return purple100;
    }
    return purple;
  };

  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.mainContiner, {backgroundColor: getColor()}]}
      onPress={onPress}>
      <Icon name="chevron-forward-outline" size={25} color={white} />
    </TouchableOpacity>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  mainContiner: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

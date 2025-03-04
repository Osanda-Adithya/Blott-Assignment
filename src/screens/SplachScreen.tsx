import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {black} from '../utils/AppColors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStack} from '../navigation/StackNavigator';
import {RootState} from '../redux/store/Store';
import {useSelector} from 'react-redux';

type splashScreenProps = NativeStackScreenProps<RootStack, 'SplashScreen'>;

const SplashScreen: FC<splashScreenProps> = ({navigation}) => {
  const {firstname, lastname} = useSelector((state: RootState) => state.login);

  useEffect(() => {
    if (firstname.trim().length !== 0 || lastname.trim().length !== 0) {
      navigation.replace('HomeScreen');
    } else {
      navigation.replace('LoginScreen');
    }
  }, [firstname, lastname, navigation]);

  return (
    <View style={styles.mainContiner}>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

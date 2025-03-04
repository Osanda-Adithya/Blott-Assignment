import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RootStack} from '../navigation/StackNavigator';
import {black, grey200, white} from '../utils/AppColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextField from '../components/CustomTextField';
import CustomIconButton from '../components/CustomIconButton';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store/Store';
import {setCredential} from '../redux/features/login/LoginSlice';

type LoginScreenProps = NativeStackScreenProps<RootStack, 'LoginScreen'>;

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [loginData, setLoginData] = useState<{
    firstName?: string;
    lastName?: string;
  }>();

  const dispatch = useDispatch<AppDispatch>();

  const onFirstNameChange = (text: string) => {
    setLoginData(prev => ({...prev, firstName: text}));
  };
  const onLastNameChange = (text: string) => {
    setLoginData(prev => ({...prev, lastName: text}));
  };
  const onButtonPress = () => {
    dispatch(
      setCredential({
        firstname: loginData?.firstName ?? '',
        lastname: loginData?.lastName ?? '',
      }),
    );
    navigation.replace('PermissionScreen');
  };

  const isButtonDisable = (): boolean => {
    if (
      !loginData?.firstName ||
      loginData?.firstName?.trim()?.length === 0 ||
      !loginData?.lastName ||
      loginData?.lastName?.trim()?.length === 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Your legal name</Text>
        <Text style={styles.subTitle}>
          We need to know a bit about you so that we can create your account.
        </Text>
        <CustomTextField
          placeHolder="First name"
          onChangeText={onFirstNameChange}
          textFieldStyle={styles.textField}
        />
        <CustomTextField
          placeHolder="Last name"
          onChangeText={onLastNameChange}
          textFieldStyle={styles.textField}
        />
        <View style={styles.buttonView}>
          <CustomIconButton
            onPress={onButtonPress}
            disable={isButtonDisable()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  subContainer: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: grey200,
    marginVertical: 15,
  },
  textField: {
    marginVertical: 15,
  },
  buttonView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

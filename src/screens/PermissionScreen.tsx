import React, {FC} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomTextButton from '../components/CustomTextButton';
import {black, grey200} from '../utils/AppColors';
import {requestNotifications} from 'react-native-permissions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStack} from '../navigation/StackNavigator';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

type permissionScreenProps = NativeStackScreenProps<
  RootStack,
  'PermissionScreen'
>;

const PermissionScreen: FC<permissionScreenProps> = ({navigation}) => {
  const onButtonPress = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.requestPermissions().then(_ =>
        navigation.replace('HomeScreen'),
      );
    } else {
      requestNotifications(['alert', 'badge', 'provisional', 'sound']).then(_ =>
        navigation.replace('HomeScreen'),
      );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={require('../assets/message_notif.png')} />
        <Text style={styles.title}>Get the most out of Blott ✅</Text>
        <Text style={styles.subTitle}>
          Allow notifications to stay in the loop with your payments, requests
          and groups.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomTextButton title="Continue" onPress={onButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default PermissionScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  subContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 23,
    fontWeight: 'bold',
    color: black,
    marginVertical: 20,
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: grey200,
    textAlign: 'center',
    lineHeight: 23,
    marginHorizontal: 20,
    fontWeight: 600,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
    justifyContent: 'flex-end',
  },
});

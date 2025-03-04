import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootStack} from '../navigation/StackNavigator';
import CustomIconButton from '../components/CustomIconButton';

type detailScreenProps = NativeStackScreenProps<RootStack, 'DetailScreen'>;

const DetailScreen: FC<detailScreenProps> = ({route, navigation}) => {
  const {url} = route.params;

  const onButtonPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <WebView
        source={{uri: url ?? 'https://www.google.com/'}}
        style={styles.subContainer}
      />
      <View style={styles.buttonView}>
        <CustomIconButton onPress={onButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  subContainer: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
    right: 40,
    transform: [{rotate: '180deg'}],
  },
});

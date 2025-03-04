import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStack} from '../navigation/StackNavigator';
import {black, purple200, white} from '../utils/AppColors';
import CustomListItem from '../components/CustomListItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store/Store';
import {fetchNews} from '../redux/repositories/Repositoires';
import {NewsResponse} from '../models';
import LinearGradient from 'react-native-linear-gradient';

type homeScreenProps = NativeStackScreenProps<RootStack, 'HomeScreen'>;

const HomeScreen: FC<homeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, error} = useSelector((state: RootState) => state.news);
  const {firstname} = useSelector((state: RootState) => state.login);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const onItemPress = (url: string) => {
    navigation.navigate('DetailScreen', {url});
  };

  const renderItem = ({item}: {item: NewsResponse}) => {
    return (
      <View style={styles.itemContainer}>
        <CustomListItem
          source={item.source}
          image={item.image}
          headline={item.headline}
          millisecond={item.datetime}
          onPress={() => onItemPress(item.url)}
        />
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[purple200, black]}
      style={styles.gradientContainer}
      start={{x: 0, y: 0.21}}
      end={{x: 0, y: 0.3}}
      locations={[0.5, 0.5]}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.greeting}>Hey {firstname}</Text>
          {!error && data?.length === 0 && <ActivityIndicator />}
          {error ? (
            <Text style={styles.errrText}>
              Something went wrong. Please try again later.
            </Text>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(_, i) => i.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  subContainer: {
    flex: 1,
    margin: 20,
  },
  greeting: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    color: white,
    marginBottom: 35,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 35,
  },
  gradientContainer: {
    flex: 1,
  },
  errrText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: white,
  },
});

import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {grey300, white} from '../utils/AppColors';

interface customListItemProps {
  source: string;
  image: string;
  headline: string;
  millisecond: number;
  onPress: () => void;
}

const CustomListItem: FC<customListItemProps> = ({
  headline,
  image,
  source,
  millisecond,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <View style={styles.subContainer}>
          <View style={styles.topLayer}>
            <Text style={styles.topLayerText}>{source}</Text>
            <Text style={styles.date}>
              {new Date(millisecond).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
          </View>
          <Text style={styles.content} numberOfLines={3}>
            {headline}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  topLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topLayerText: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: grey300,
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: grey300,
    textAlign: 'right',
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: white,
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
  },
});

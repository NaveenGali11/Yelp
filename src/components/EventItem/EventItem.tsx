import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Constants, fontStyles} from '../../constants';
import {useThemeColor} from '../../hooks';
import {horizontalScale, verticalScale} from '../../utils';
import {Card} from '../Card';
import {EventItemProps} from './EventItem.types';

const EventItem = (props: EventItemProps) => {
  const {
    name,
    onPress,
    description,
    is_free,
    category,
    attending_count,
    imageUrl,
    style,
    imageStyle,
    textStyle,
  } = props;

  const getImageUrl = () => {
    if (imageUrl) {
      return imageUrl;
    } else {
      return Constants.DefaultImageUrl;
    }
  };

  const {colors} = useThemeColor();

  return (
    <Card
      style={[
        styles.card,
        {
          backgroundColor: colors.tertiaryBackground,
        },
        style,
      ]}
      onPress={onPress}>
      <View>
        <Image
          source={{
            uri: getImageUrl(),
          }}
          style={[styles.image, imageStyle]}
        />
        <View
          style={[styles.eventInfoRow, {backgroundColor: colors.background}]}>
          <Text>{is_free ? 'true' : 'false'}</Text>
          <Text>{category}</Text>
          <Text>{attending_count}</Text>
        </View>
      </View>
      <Text style={[fontStyles.h2_Bold, textStyle]}>{name}</Text>
      <Text style={[fontStyles.b2_Text_Regular]} numberOfLines={3}>
        {description}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: verticalScale(250),
    width: '100%',
    borderRadius: verticalScale(15),
  },
  card: {
    marginHorizontal: horizontalScale(14),
    borderRadius: verticalScale(10),
    overflow: 'hidden',
    marginVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(8),
  },
  eventInfoRow: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: verticalScale(20),
  },
});

export {EventItem};

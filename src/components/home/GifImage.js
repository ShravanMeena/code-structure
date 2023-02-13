import React from 'react';
import {StyleSheet} from 'react-native';

// third parties
import FastImage from 'react-native-fast-image';

// styles
import {BORDER_RADIUS_4} from '@styles/spacing';

const GifImage = ({uri}) => {
  return (
    <FastImage
      style={styles.image}
      source={{
        uri,
      }}
    />
  );
};

export default GifImage;

const styles = StyleSheet.create({
  image: {width: '100%', height: 200, borderRadius: BORDER_RADIUS_4},
});

import React from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';

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
  image: {width: '100%', height: 200, borderRadius: 4},
});

import {Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// ui - components
import GifImage from './GifImage';

// styles
import {FLEX_COLUMN_ALIGN_CENTER} from '@styles/typography';
import {BORDER_RADIUS_4, SCALE_10} from '@styles/spacing';
import {Colors} from '@styles';

export default function MyGifCard({item}) {
  const [play, setPlay] = useState(true);
  const playAndPauseHandler = () => {
    setPlay(!play);
  };

  // DESTRUCTURE
  let {url, webp} = item.gif
    ? item.gif?.images?.original
    : item.images?.original;

  // get links which is playable
  let playLinks = url;

  // i get links which is only webp
  let pauseLinks = webp;

  return (
    <Pressable onPress={playAndPauseHandler} style={styles.item}>
      <GifImage uri={play ? playLinks : pauseLinks} />
      {/* <GifVideo item={item} /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: BORDER_RADIUS_4,
    marginVertical: SCALE_10,
    backgroundColor: Colors.GRAY_MEDIUM,
  },

  footer: {
    height: 500,
    ...FLEX_COLUMN_ALIGN_CENTER,
  },
});

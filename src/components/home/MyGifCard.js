import {Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import GifImage from './GifImage';
// TODO: Waht i did here if click on gif then conditionaly changed image urls
// GifVideo, // TODO:: So if you want to play gif as a video show you can use video componets

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

  // i get links which is playable from response
  let playLinks = url;

  // i get links which is not playble  from response this is only images
  let pauseLinks = webp;

  return (
    <Pressable onPress={playAndPauseHandler} style={styles.item}>
      {/* if you wants to use gif as image then you can use this one.... i am using GifImage componets */}
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

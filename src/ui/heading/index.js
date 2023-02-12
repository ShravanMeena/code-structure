import {Text, StyleSheet} from 'react-native';
import React from 'react';

import {useTheme} from '@react-navigation/native';

// styles
import {FONT_SIZE_20, FONT_WEIGHT_BOLD} from '../../styles/typography';
import palette from '../../styles/palette';

export default function Heading({children, props_styles}) {
  const {colors} = useTheme();

  return (
    <Text style={[palette.heading, {color: colors.text, ...props_styles}]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE_20,
    fontWeight: FONT_WEIGHT_BOLD,
  },
});

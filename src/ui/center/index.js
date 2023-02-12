import {View, StyleSheet} from 'react-native';
import React from 'react';
import {FLEX_COLUMN_ALIGN_CENTER} from '../../styles/typography';

export default function Center({children, props_styles}) {
  return <View style={[styles.container, {...props_styles}]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN_ALIGN_CENTER,
  },
});

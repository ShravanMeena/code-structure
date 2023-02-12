import {View, StyleSheet} from 'react-native';
import React from 'react';

// ui - components
import {Description, Heading} from '@ui';

// style
import {Colors} from '@styles';
import {FLEX_COLUMN_CENTER} from '@styles/typography';
import {BORDER_RADIUS_4, SCALE_8} from '@styles/spacing';

export default function ErrorFallback(props) {
  return (
    <View style={styles.container}>
      <Heading>Something happened!</Heading>
      <Description>{props.error.toString()}</Description>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN_CENTER,
    backgroundColor: Colors.WARNING,
    padding: SCALE_8,
    borderRadius: BORDER_RADIUS_4,
    marginVertical: SCALE_8,
  },
});

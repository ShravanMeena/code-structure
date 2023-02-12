import {View, StyleSheet} from 'react-native';
import React from 'react';

// styles
import {FLEX_COLUMN_CENTER} from '../../styles/typography';

export default function Container({children}) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    ...FLEX_COLUMN_CENTER,
    width: '100%',
  },
  container: {
    width: '95%',
  },
});

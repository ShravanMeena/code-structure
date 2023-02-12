import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

// style
import {FLEX_COLUMN_CENTER} from '../../styles/typography';

export default function WaitIndicator() {
  return (
    <View const={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    ...FLEX_COLUMN_CENTER,
  },
});

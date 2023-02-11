import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

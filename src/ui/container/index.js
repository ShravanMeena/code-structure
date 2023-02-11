import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function Container({children}) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    width: '95%',
  },
});

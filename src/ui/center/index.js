import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function Center({children, props_styles}) {
  return <View style={[styles.container, {...props_styles}]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

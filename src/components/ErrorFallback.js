import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Heading} from '../ui';

export default function ErrorFallback(props) {
  return (
    <View style={styles.container}>
      <Heading props_styles={styles.title}>Something happened!</Heading>
      <Heading props_styles={styles.text}>{props.error.toString()}</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    fontSize: 48,
  },
  text: {
    marginVertical: 16,
  },
});

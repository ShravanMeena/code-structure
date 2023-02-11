import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export default function Input({setValue, placeholder, placeholderTextColor}) {
  // theme colors
  const {colors} = useTheme();

  return (
    <TextInput
      onChangeText={e => setValue(e)}
      placeholder={placeholder}
      style={[
        styles.input,
        {
          borderColor: colors.border,
          color: colors.text,
        },
      ]}
      placeholderTextColor={colors.text}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
});

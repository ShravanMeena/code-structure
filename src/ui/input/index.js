import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {BORDER_RADIUS_6, SCALE_10} from '../../styles/spacing';

export default function Input({setValue, placeholder}) {
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
    height: 50,
    paddingHorizontal: SCALE_10,
    marginTop: SCALE_10,
    borderRadius: BORDER_RADIUS_6,
    borderWidth: 1,
  },
});

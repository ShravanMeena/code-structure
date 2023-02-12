import {Text} from 'react-native';
import React from 'react';

import {useTheme} from '@react-navigation/native';

// styles
import palette from '@styles/palette';

export default function Description({children, props_styles}) {
  const {colors} = useTheme();

  return (
    <Text style={[palette.text, {color: colors.text, ...props_styles}]}>
      {children}
    </Text>
  );
}

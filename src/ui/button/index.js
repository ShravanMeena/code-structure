import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Heading from '../heading';

// Black background and white text in light theme, inverted on dark theme
function Button({onPress, children, props_styles, text_style}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: colors.card_extra, ...props_styles}}>
      <Heading props_styles={text_style}>{children}</Heading>
    </TouchableOpacity>
  );
}

export default Button;

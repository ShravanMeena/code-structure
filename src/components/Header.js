import {View, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {
  getFilteredGiphyAction,
  selectFilterTypeAction,
} from '../redux/actions/giphyAction';
import {themeTogglerAction} from '../redux/actions/themeAction';

// ui - components
import {Button} from '../ui';

// styles
import {SCALE_16} from '../styles/spacing';
import {FLEX_ROW_SPACE_BETWEEN} from '../styles/typography';
import {Colors} from '../styles';

export default function Header() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {typeOfGif} = useSelector(state => state.giphyReducer);
  const [isEnabled, setIsEnabled] = useState(false);
  const {navigate} = useNavigation();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {activeTheme} = useSelector(state => state.themeReducer);

  const themeHandler = () => {
    toggleSwitch();

    if (activeTheme === 'light') {
      dispatch(themeTogglerAction('dark'));
    } else {
      dispatch(themeTogglerAction('light'));
    }
  };

  const getTrendingGifHandler = () => {
    dispatch(selectFilterTypeAction('trending'));
    dispatch(getFilteredGiphyAction({page: 1}));
  };

  const navigateGateAboutMe = () => {
    navigate('AboutMe');
  };

  const button = {
    borderWidth: 1,
    borderColor: Colors.ALERT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: typeOfGif === 'trending' ? Colors.ALERT : Colors.PRIMARY,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.PRIMARY,
        },
      ]}>
      <Button
        text_style={styles.text_style}
        props_styles={button}
        onPress={getTrendingGifHandler}>
        Trending GIF
      </Button>

      <Button
        text_style={{
          color: Colors.WARNING,
        }}
        onPress={navigateGateAboutMe}>
        About ME
      </Button>

      <Switch
        trackColor={{false: Colors.WARNING, true: Colors.WHITE}}
        thumbColor={isEnabled ? Colors.WARNING : Colors.WHITE}
        ios_backgroundColor={Colors.ALERT}
        onValueChange={themeHandler}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    ...FLEX_ROW_SPACE_BETWEEN,
    paddingHorizontal: SCALE_16,
  },
  text_style: {
    color: Colors.WHITE,
  },
});

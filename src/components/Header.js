import {View, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Button from '../ui/button';
import {useDispatch, useSelector} from 'react-redux';
import {themeTogglerAction} from '../redux/actions/themeAction';
import {Colors} from '../styles';

import {
  getFilteredGiphyAction,
  selectFilterTypeAction,
} from '../redux/actions/giphyAction';

export default function Header() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {selectedTypeOfGif} = useSelector(state => state.giphyReducer);
  const [isEnabled, setIsEnabled] = useState(false);

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

  const gettrendingGiff = () => {
    dispatch(selectFilterTypeAction('trending'));
    dispatch(getFilteredGiphyAction({page: 1}));
  };

  const button = {
    borderWidth: 1,
    borderColor: Colors.ALERT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor:
      selectedTypeOfGif === 'trending' ? Colors.ALERT : Colors.PRIMARY,
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
        onPress={gettrendingGiff}>
        Trending GIF
      </Button>

      <Switch
        trackColor={{false: Colors.WARNING, true: Colors.WHITE}}
        thumbColor={isEnabled ? Colors.WARNING : Colors.WHITE}
        ios_backgroundColor="#3e3e3e"
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  text_style: {
    color: Colors.WHITE,
  },
});

import React, {useEffect} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// selectors and actions
import {useDispatch, useSelector} from 'react-redux';
import {themeTogglerAction} from '@redux/actions/themeAction';

// ui - components
import StackNavigator from './StackNavigator';
import CustomStatusBar from './CustomStatusBar';

// style
import {Colors} from '@styles';
import {generateTheme} from '@utils/helper';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(state => state.themeReducer.activeTheme);

  // get color theme from user's device
  const colorScheme = Appearance.getColorScheme();
  let darkMode = activeTheme === 'dark';

  // theme management
  const MyTheme = generateTheme(darkMode);

  useEffect(() => {
    if (colorScheme === 'dark') {
      dispatch(themeTogglerAction('dark'));
    } else {
      dispatch(themeTogglerAction('light'));
    }
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <CustomStatusBar
          backgroundColor={Colors.ALERT}
          barStyle={darkMode ? 'dark-content' : 'dark-content'}
        />
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;

import {Alert} from 'react-native';
import {getFilteredGiphyAction} from '../redux/actions/giphyAction';
import {Colors} from '../styles';

// import {ToastAndroid} from 'react-native';

export const showToast = error => {
  Alert.alert('Error', error, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  // ToastAndroid.show(error || 'Error occured', ToastAndroid.SHORT);
};

export const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9);

export const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const handlerActions = (
  dispatch,
  typeOfGif,
  pageNumberFromStore,
  lastQueryFromStore,
) => {
  let page = pageNumberFromStore + 1;

  if (typeOfGif === 'trending') {
    dispatch(getFilteredGiphyAction({page}));
  }

  if (typeOfGif === 'search') {
    dispatch(
      getFilteredGiphyAction({
        type: 'search',
        values: {searchTerm: lastQueryFromStore},
        page,
      }),
    );
  }

  if (typeOfGif === 'category') {
    dispatch(
      getFilteredGiphyAction({
        type: 'category',
        values: {category: lastQueryFromStore},
        page,
      }),
    );
  }
};

export const generateTheme = darkMode => {
  return {
    dark: true,
    colors: {
      PRIMARY: Colors.PRIMARY,
      SECONDARY: darkMode ? Colors.SECONDARY_DARK : Colors.SECONDARY_LIGHT,
      background: darkMode ? Colors.BLACK : Colors.WHITE,
      card: Colors.PRIMARY,
      text: darkMode ? Colors.WHITE : Colors.BLACK,
      border: darkMode ? Colors.WHITE : Colors.SECONDARY,
    },
  };
};

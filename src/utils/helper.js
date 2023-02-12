import {Alert} from 'react-native';

// style
import {Colors} from '@styles';
// import {ToastAndroid} from 'react-native';

/*
this is is for showing error or something as alert form -- succes/error/warning
1. Yes we can you use third part library like toast
2. We can create custom also 
*/
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

// Key Generator for flatilist Unique key -
// key generate + index + we can add some ids from response and create a unique for flalist components
export const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9);

// helper function for Capitalized text
export const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 *
 * @param {*} dispatch // call a action
 * @param {*} typeOfGif // type of api like trending or categroy
 * @param {*} pageNumberFromStore // page number we save in redux store
 * @param {*} lastQueryFromStore  // extra queries like search or category name we save in this var
 * @returns
 * 
Use of fucntion 
    we use this function for code cleanup and the main use case is conditionally call api with single actions so manage code is easyu for us in long term
*/
export const handlerActions = (
  dispatch,
  typeOfGif,
  pageNumberFromStore,
  lastQueryFromStore,
  getFilteredGiphyAction,
) => {
  let page = pageNumberFromStore + 1;
  let type = typeOfGif;

  switch (type) {
    case 'trending':
      return dispatch(getFilteredGiphyAction({page}));
    case 'search':
      return dispatch(
        getFilteredGiphyAction({
          type,
          page,
          values: {searchTerm: lastQueryFromStore},
        }),
      );
    case 'category':
      dispatch(
        getFilteredGiphyAction({
          type,
          page,
          values: {category: lastQueryFromStore},
        }),
      );
      break;
    default:
      return typeOfGif;
  }
};

// to create theme light.dark =>> Replace default ocnfiguration of theme of react native navigation
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

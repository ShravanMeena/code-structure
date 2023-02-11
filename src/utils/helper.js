import {getFilteredGiphyAction} from '../redux/actions/giphyAction';
import {Colors} from '../styles';

export const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9);

export const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const handlerActions = (
  dispatch,
  selectedTypeOfGif,
  fromReducerPageNumber,
  valuesFromReducer,
) => {
  let page = fromReducerPageNumber + 1;

  if (selectedTypeOfGif === 'trending') {
    dispatch(getFilteredGiphyAction({page}));
  }

  if (selectedTypeOfGif === 'search') {
    dispatch(
      getFilteredGiphyAction({
        type: 'search',
        values: {searchTerm: valuesFromReducer},
        page,
      }),
    );
  }

  if (selectedTypeOfGif === 'category') {
    dispatch(
      getFilteredGiphyAction({
        type: 'category',
        values: {category: valuesFromReducer},
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

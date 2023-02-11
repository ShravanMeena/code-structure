import {THEME_TOGGLER} from '../types';

export const themeTogglerAction = theme => {
  try {
    return async dispatch => {
      dispatch({
        type: THEME_TOGGLER,
        payload: theme,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

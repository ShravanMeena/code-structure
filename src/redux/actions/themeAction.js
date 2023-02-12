import {THEME_TOGGLER} from '../types';

// for theme toggle
export const themeTogglerAction = theme => {
  try {
    return async dispatch => {
      dispatch({
        type: THEME_TOGGLER,
        payload: theme,
      });
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

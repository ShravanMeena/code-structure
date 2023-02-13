import {THEME_TOGGLER} from '../types';

// for theme toggle
export const themeTogglerAction = theme => {
  return async dispatch => {
    dispatch({
      type: THEME_TOGGLER,
      payload: theme,
    });
  };
};

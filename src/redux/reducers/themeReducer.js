import {THEME_TOGGLER} from '../types';

const initialState = {
  activeTheme: 'dark',
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case THEME_TOGGLER:
      return {...state, activeTheme: action.payload};
    default:
      return state;
  }
}

export default themeReducer;

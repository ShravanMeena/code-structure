import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {themeReducer, giphyReducer} from './reducers';

const rootReducer = combineReducers({
  giphyReducer,
  themeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

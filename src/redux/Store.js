import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import giphyReducer from './reducers/giphyReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  giphyReducer,
  themeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

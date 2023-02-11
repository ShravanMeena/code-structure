import * as React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from './src/navigations/MainNavigation';

import {store} from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

import React from 'react';
import { Provider } from 'react-redux';
import history from './utils/history';
import { SharedExampleTest } from '@placement-tci/shared/example-test';

import configureStore from './store';

const App = () => {
  const initialState = {};
  const store = configureStore(initialState, history);
  return (
    <Provider store={store}>
      <div>Hi!</div>
      <SharedExampleTest />
      <div>Hi!</div>
      <img src="/assets/empanelmentBG.png" />
    </Provider>
  );
};
export default App;

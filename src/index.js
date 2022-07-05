import React from 'react';
import {App} from './App';
import { store } from './redux/redux-state'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

let rerenderApp = () => {
  root.render(
    <Provider store={store}>
      <App
      store={store} />
    </Provider>
 );   
}

rerenderApp()
// store.subscribe(() => {
//   rerenderApp()
// })




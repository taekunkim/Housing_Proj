import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.scss';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

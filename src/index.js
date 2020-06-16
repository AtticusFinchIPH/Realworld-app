import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store'

import { Route, Redirect, HashRouter} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Route path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

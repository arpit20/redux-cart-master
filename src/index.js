import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';

import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { ReduxAsyncConnect } from 'redux-connect';
//We import the configure store function that handles creating the store for us.
import Store from './store';

//When it is imported we call it to create the actual store based on our reducers. This is also
//so we don't have to import our reducers in this file.
const store = Store(window.__INITIAL_STATE__);
const mountPoint = document.getElementById('root')

//Provider makes so that every connected container component
//gets access to the store, you have to create the store based
//on your store configuration the pass it along to the providers
ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
      {renderRoutes(AppRoutes)}
   </ BrowserRouter>
 </Provider>,
  mountPoint
);

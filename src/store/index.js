import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
//Import our rootreducer from '../reducers/index.js' this hold our whole state
import rootReducer from  '../reducers';

/**
 * When we call this function we return a created store with our reducers, so this is the same
 * as calling `const store = createStore(reducer)`. We have extracted it to a separate file. This function
 * gets called in 'index.js'. The second argument to 'createStore' is so we can use Redux DevTools
 * in our browser for easier debugging. Super cool!
 * @param {Object} initialState 
 */
const composeEnhancers = ( typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default function store(initialState) {
    return createStore(
      rootReducer,
      initialState,
      enhancer
    );
}

//The last argument is just so you can use the Redux DevTools for Chrome/Firefox, download
//the extension to your browser and see what happens. 
//Chrome:
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
//FireFox:
//https://addons.mozilla.org/en-US/firefox/addon/remotedev/
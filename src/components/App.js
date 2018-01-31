import React, { Component } from 'react';
import HeaderContainer from './Header/HeaderContainer';
import '../styles/App.scss';

import * as API from '../api';

import ItemContainer from './Product/ItemContainer';
/**
 * We could choose to connect the App component or not. It depends on what you want to do,
 * in this example we choose to connect the two components below to illustrate how we can connect
 * multiple component to the same store and data. So this component is "regular".
 */
class App extends Component {

  render() {   
    return (
      <div className="App">
        
        <HeaderContainer></HeaderContainer>
        <div className="container">
          <div className="main-banner">
              <div className="banner-img"></div>
          </div>
          <ItemContainer></ItemContainer>
         </div> 
      </div>
    );
  }
}

export default App;




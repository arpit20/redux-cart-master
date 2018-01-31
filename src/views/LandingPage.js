import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import {connect} from 'react-redux';


import HeaderContainer from '../components/Header/HeaderContainer';
import '../styles/App.scss';

import * as API from '../api';


import {fetchTrendingProducts} from '../actions/trendingProductActions';
import {fetchMVProducts} from '../actions/trendingProductActions';
import {fetchTopLevelCategories} from '../actions/categoriesActions';

/**
 * We could choose to connect the App component or not. It depends on what you want to do,
 * in this example we choose to connect the two components below to illustrate how we can connect
 * multiple component to the same store and data. So this component is "regular".
 */
class LandingPage extends Component {

  
  constructor(props){
    super(props)
  }

  static fetchData(store){
    return Promise.all([store.dispatch(fetchTopLevelCategories()),
        store.dispatch(fetchTrendingProducts()),
        store.dispatch(fetchMVProducts())]);
 
  }

  componentDidMount(){
        this.props.fetchTopCats();
  }



  render() {   
    return (
      <div className="App">
        
        <HeaderContainer {...this.props}></HeaderContainer>
        <div className="container">
       
                {renderRoutes(this.props.route.routes)}

         </div> 
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    let {categories} = state;
    return {categories};
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchTopCats : ()=>{
            dispatch(fetchTopLevelCategories())
        }
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);




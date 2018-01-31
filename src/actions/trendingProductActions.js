
import {getTrendingProducts,getMVProducts} from '../api';


export function itemsFetchDataSuccess(items) {
  return {
      type: 'TRENDING_ITEMS_FETCH_SUCCESS',
      payload: items
  };
}

export function mostPopularFetchDataSuccess(items) {
  return {
      type: 'MV_ITEMS_FETCH_SUCCESS',
      payload: items
  };
}


export function fetchTrendingProducts() {
  return (dispatch)=>{

     return getTrendingProducts()
        .then(function(response){
           return response.json()
        }).then(function(response){
           dispatch(itemsFetchDataSuccess(response.results.slice(5)));
        })


  }
}


export function fetchMVProducts() {
  return (dispatch)=>{

    return getMVProducts()
        .then(function(response){
           return response.json()
        }).then(function(response){
           dispatch(mostPopularFetchDataSuccess(response.results.slice(5)));
        })


  }
}


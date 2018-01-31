import initialState from './initialState';

/**
 * This is so we could extend the product array of the state,
 * this reducer takes the products array from 'initialState.js'
 * and returns it, nothing more. Not listening to any actions
 * at the moment. This will populate the state
 */
export default function products(state = initialState.products, action){

    const {type,payload} = action;

    switch(type){
        case "TRENDING_ITEMS_FETCH_SUCCESS":
            return {...state,trendingProducts:payload}

        case "MV_ITEMS_FETCH_SUCCESS":
            return {...state,MVProducts:payload}
        
        default :
            return state; 
    }
     

     return state;
};
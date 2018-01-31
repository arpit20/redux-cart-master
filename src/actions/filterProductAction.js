
import { getProducts } from '../api';

export function filterItems(items){
    return{
        type:"FILTER_ITEMS",
        payload:items
    }
}

export function fetchProductsForCat(cat){

    return (dispatch)=>{

       return getProducts(cat)
            .then(function(response){
                return response.json();
            }).then(function(resposne){
                dispatch(filterItems(resposne.products));
            })
            
    }
}
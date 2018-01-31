
import initialState from './initialState';

export default function filterProducts(state=initialState.filteredItems,action) {
    
    const {type,payload} = action

    switch(type){
        case "FILTER_ITEMS":
            return [...state,...payload];


        default:
            return state;
    }

    return state;

}
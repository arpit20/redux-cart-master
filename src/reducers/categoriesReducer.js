import  initialState from './initialState';

export default function categories(state=initialState.categories,action){

    const {type,payload} = action;

    switch(type){
        case "FETCH_TOP_LEVEL_CAT":
            Object.assign({},state,)
            return {...state,...payload};

        case "FETCH_SUB_LEVEL_CAT":
            return {...state,...payload};

        default:
            return state;
    }
}
import {getTopLevelCategories , getSubCategories} from '../api';

export function fetchCategories(cats){
    return{
        type:"FETCH_TOP_LEVEL_CAT",
        payload:cats
    }
}

export function fetchSubCategories(subCats){
    return{
        type:"FETCH_SUB_LEVEL_CAT",
        payload:subCats
    }
}

export function fetchTopLevelCategories(){
    return (dispatch)=>{

      return  getTopLevelCategories()
            .then(function(response){
                return response.json();
            }).then(function(response){
                let topCats = {};
                if(response.categories && response.categories.length>0){
                    response.categories.slice(0,15).forEach((cat)=>
                    {
                        return topCats[cat.name]=[];
                    })
                    dispatch(fetchCategories(topCats)) 
                    Object.keys(topCats).map((cat)=>{
                        getSubCategories(cat).then(function(response){
                            return response.json();
                        }).then(function(response){
                            if(response.categories && response.categories.length>0){
                                let subCats = response.categories.slice(0,15);
                                dispatch(fetchSubCategories({[cat]:subCats})) ;
                            }
                        }).catch(function(error) {
                            console.log(error);
                        });
                    })
                }
                
            }).catch(function(error) {
                console.log(error);
            });
    }
}
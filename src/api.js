
import fetch from 'cross-fetch' ;

export const getTrendingProducts = ()=>{

    return fetch('https://api.bestbuy.com/beta/products/trendingViewed?apiKey=Mek6rttS1Y4JJuzUEzw48Dyj', {mode: 'cors'})

}

export const getMVProducts = ()=>{
    
    return fetch('https://api.bestbuy.com/beta/products/mostViewed?apiKey=Mek6rttS1Y4JJuzUEzw48Dyj', {mode: 'cors'})
    
}


export const getTopLevelCategories = () => {
    return fetch('https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=Mek6rttS1Y4JJuzUEzw48Dyj&pageSize=100&show=id,name&format=json', {mode: 'cors'})
    
}

export const getSubCategories = (cat) => {
    return fetch(`https://api.bestbuy.com/v1/categories(name=${cat}*)?apiKey=Mek6rttS1Y4JJuzUEzw48Dyj&format=json`, {mode: 'cors'})
    
}

export const getProducts = (cat) => {
    return fetch(`https://api.bestbuy.com/v1/products(categoryPath.name=${cat}*)?apiKey=Mek6rttS1Y4JJuzUEzw48Dyj&format=json`, {mode: 'cors'})
}


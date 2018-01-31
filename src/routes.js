import React from 'react';
// import {Route, BrowserRouter, Switch} from 'react-router-dom';

import LandingPage from './views/LandingPage';
import ItemContainer from './components/Product/ItemContainer';
import ProductList from './views/ProductList';
import Loadable from 'react-loadable';

// export const AppRoutes = () =>(
//     <BrowserRouter>
//         <LandingPage/>
//     </BrowserRouter>
// )

// const LandingPageAsync = Loadable({
//     loader: () => {
//         return import('./views/LandingPage' /* webpackChunkName: 'LandingPage' */);
//     },

//     loading:()=> <p>Loading the LandingPage component...</p>
    
// })

export default ([{
    path:'/',
    component:LandingPage,
    routes:[{
        path:'/',
        exact:true,
        component:ItemContainer
    },{
        path:'/category/:cat',
        component:ProductList
    }]
}])
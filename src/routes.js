import React from 'react';
// import {Route, BrowserRouter, Switch} from 'react-router-dom';

import LandingPage from './views/LandingPage';

import ItemContainerAsync from './components/Product/ItemContainerAsync';
import ProductListAsync from './views/ProductListAsync';
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
// })

export default ([{
    path:'/',
    component:LandingPage,
    routes:[{
        path:'/',
        exact:true,
        component:ItemContainerAsync
    },{
        path:'/category/:cat',
        component:ProductListAsync
    }]
}])
import React from 'react';
import Loadable from 'react-loadable';


export default Loadable({
    loader: () => {
        return import('./ProductList' /* webpackChunkName: 'ProductList' */);
    },

    loading:()=> <p>Loading the ProductList component...</p>
    
})
import React from 'react';
import Loadable from 'react-loadable';

import importCss from '../importCSS'

export default Loadable({
    loader: () => {

        return Promise.all([
            import('./ProductList' /* webpackChunkName: 'ProductList' */),
            importCss('ProductList')
        ]).then(promises => promises[0]);
    },

    loading:()=> <p>Loading the ProductList component...</p>
    
})
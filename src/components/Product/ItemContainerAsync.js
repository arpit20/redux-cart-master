import React from 'react';
import Loadable from 'react-loadable';

import importCss from '../../importCSS'

export default Loadable({
    loader: () => {

        return Promise.all([
            import('./ItemContainer' /* webpackChunkName: 'ItemContainer' */),
            importCss('ItemContainer')
        ]).then(promises => promises[0]);
    },

    loading:()=> <p></p>
    
})
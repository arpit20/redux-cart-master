import React from 'react';
import Loadable from 'react-loadable';


export default Loadable({
    loader: () => {
        return import('./ItemContainer' /* webpackChunkName: 'ItemContainer' */);
    },

    loading:()=> <p>Loading the UserList component...</p>
    
})
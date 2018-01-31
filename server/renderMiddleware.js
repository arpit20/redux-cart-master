import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import {matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import store from '../src/store/';
import html from './html';
import routes from '../src/routes';



export const serverRenderedHtml =  (req, res) => {
    const storeSet = store();
    //call, wait, and set api responses into redux store's state (ghub.io/redux-connect)
    // console.log(routes);
    const branch = matchRoutes(routes, req.url);
    // console.log(branch);
    const promises = branch.map(({route}) => {
        console.log(route.component);
        console.log("hello");
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(storeSet) : Promise.resolve(null)
    });
    return Promise.all(promises).then((data) => {
        console.log(data);
    //render the html template
        let context = {};
        const template = html(
            renderToString(
                <Provider store={storeSet}>
                    <StaticRouter location={req.url} context={context}>
                        {renderRoutes(routes)}
                    </StaticRouter>
                </Provider>
            ),
            storeSet.getState()
        );
        // console.log(template);
        res.send(template);
    })
  };


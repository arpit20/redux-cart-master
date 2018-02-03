import assetsManifest from '../build/asset-manifest.json';
import fs from 'fs';
const path = require('path');


export  default (app, initialState,modules) =>{

    const assets = Object.keys(assetsManifest).reduce((obj,key)=>({
        ...obj,
        [key]: {
            ...assetsManifest[key],
            styles: assetsManifest[key].css?
                fs.readFileSync(
                    path.resolve(__dirname,'..','build','static', `css/${assetsManifest[key].css.split('/').pop()}`),'utf8')
             :''
        }
    }),{});

    // console.log(assets);

    // console.log(modules.reduce((s,module)=>
    // ( `${s}<script src="${assets[module].js}"></script>`)
    // , ''));
    return (`
        <!doctype html>
        <html lang="en">
            <head>

                <link rel="preload" as="script" href="${assets.webpackManifest.js}">
                <link rel="preload" as="script" href="${assets.vendor.js}">
                <link rel="preload" as="script" href="${assets.main.js}">
                <style>${assets.vendor.styles}</style>
                <style>${assets.main.styles}</style>
                ${modules.reduce((s,module)=>( `${s}<style>"${assets[module].styles}"></style>`), '')}
            </head>
            <body>
                <div id="root">${app}</div>
                <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                <script src="${assets.webpackManifest.js}"></script>
                <script src="${assets.vendor.js}"></script>
                <script src="${assets.main.js}"></script>
                ${modules.reduce((s,module)=>( `${s}<script src="${assets[module].js}"></script>`), '')}
            </body>
            </html>`) 
};

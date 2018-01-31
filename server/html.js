import assetsManifest from '../build/manifest.json';

export  default (app, initialState,modules) =>{

    console.log(modules.reduce((s,module)=>
    ( `${s}<script src="${assetsManifest[`${module}.js`]}></script>`)
    , ''));
    return (`
        <!doctype html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="${assetsManifest['main.css']}">
            </head>
            <body>
                <div id="root">${app}</div>
                <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                <script src="${assetsManifest['webpackManifest.js']}"></script>
                <script src="${assetsManifest['vendor.js']}"></script>
                <script src="${assetsManifest['main.js']}"></script>
                ${modules.reduce((s,module)=>( `${s}<script src="${assetsManifest[`${module}.js`]}"></script>`), '')}
            </body>
            </html>`) 
};

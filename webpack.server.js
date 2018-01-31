/* eslint-disable max-len */
const path = require('path');
const webpack = require('webpack');


const __PWA_ENV__ = process.env.PWA_ENV;
const __PWA_PUBLIC_PATH__ = process.env.PWA_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './server/server.js',

  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },

  output: {
    path: path.resolve(__dirname,'build','server'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  

  module: {
    rules:  [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['css-loader/locals', 'postcss-loader'] },
      { test: /\.scss$/, use: ['css-loader/locals','sass-loader'] },
      { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } }] },
      { test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 1000, name: 'fonts/[name].[ext]' } }] },
    ],
  },

 
  devtool: 'source-map'
};

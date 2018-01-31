/* eslint-disable max-len */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const DashboardPlugin = require('webpack-dashboard/plugin');

const __PWA_ENV__ = process.env.PWA_ENV;
const __PWA_PUBLIC_PATH__ = process.env.PWA_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  cache: !isProd,

  entry: {
    main: path.resolve(__dirname,'..','src','index.js'),
    vendor: [path.resolve(__dirname,'..','src','vendor.js')],
  },

  output: {
    path: path.resolve(__dirname,'..','build'),
    publicPath: path.resolve(__dirname,'..','build','static','/'),
    filename: isProd ? 'static/js/[name].[chunkhash:8].js' : 'js/[name].js',
    chunkFilename: isProd ? 'static/js/[name].[chunkhash:8].js' : 'js/[name].js',
  },

//   resolve: {
//     alias: {
//       react: 'preact-compat',
//       'react-dom': 'preact-compat',
//     },
//   },

  module: {
    rules: isProd ? [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: {
                loader: require.resolve('style-loader'),
                options: {
                  hmr: false,
                },
              },
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    modules: true,
                    sourceMap: true
                  },
                }
                // {
                //   loader: require.resolve('postcss-loader'),
                //   options: {
                //     // Necessary for external CSS imports to work
                //     // https://github.com/facebookincubator/create-react-app/issues/2677
                //     ident: 'postcss',
                //     plugins: () => [
                //       require('postcss-flexbugs-fixes'),
                //       autoprefixer({
                //         browsers: [
                //           '>1%',
                //           'last 4 versions',
                //           'Firefox ESR',
                //           'not ie < 9', // React doesn't support IE8 anyway
                //         ],
                //         flexbox: 'no-2009',
                //       }),
                //     ],
                //   },
                // },
              ],
            }
           
          )
        )
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
     {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: true,
                importLoaders: 1
              }
            },
            'sass-loader'
          ]
        })
    },
 
      { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[hash:8].[ext]' } }] },
      { test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 1000, name: 'fonts/[name].[hash:8].[ext]' } }] },
    ] : [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: {
                loader: require.resolve('style-loader'),
                options: {
                  hmr: false,
                },
              },
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    modules: true,
                    sourceMap: shouldUseSourceMap
                  },
                }
                // {
                //   loader: require.resolve('postcss-loader'),
                //   options: {
                //     // Necessary for external CSS imports to work
                //     // https://github.com/facebookincubator/create-react-app/issues/2677
                //     ident: 'postcss',
                //     plugins: () => [
                //       require('postcss-flexbugs-fixes'),
                //       autoprefixer({
                //         browsers: [
                //           '>1%',
                //           'last 4 versions',
                //           'Firefox ESR',
                //           'not ie < 9', // React doesn't support IE8 anyway
                //         ],
                //         flexbox: 'no-2009',
                //       }),
                //     ],
                //   },
                // },
              ],
            }
         
          )
        ),
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
        {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: true,
                importLoaders: 1
              }
            },{
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            'sass-loader'
          ]
        })
       },
 
  
      { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } }] },
      { test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 1000, name: 'fonts/[name].[ext]' } }] },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin([ path.resolve(__dirname,'..','build','static')]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProd ? '"production"' : '"development"',
      __BROWSER__: true,
      __PWA_ENV__: JSON.stringify(__PWA_ENV__),
      __LOCAL__: __PWA_ENV__ === 'local',
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebookincubator/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false,
        },
        mangle: {
          safari10: true,
        },        
        output: {
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebookincubator/create-react-app/issues/2488
          ascii_only: true,
        },
        sourceMap: true,
      }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','webpackManifest'],
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      children: true,
      minChunks: 2,
    }),
    new AssetsPlugin({
      filename: 'asset-manifest.json',
      path: path.resolve('../build/'),
      prettyPrint: true,
    }),
    new ExtractTextPlugin({
        filename: 'static/css/[name].[contenthash:8].css'
    })
   
  ],



  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname,'..','build'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    overlay: true,
    quiet: true,
  },
};

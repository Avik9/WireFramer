﻿const webpack = require('webpack'),
 webpackMerge = require('webpack-merge'),
         path = require('path'),
      helpers = require('./helpers'),
 commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig(), {
    mode: 'development',

    /**
     * Source map for Karma from the help of karma-sourcemap-loader & karma-webpack.
     *
     * See: https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map'
});
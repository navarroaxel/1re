const path = require('path'),
    webpack = require('webpack'),
    CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src'
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader?cacheDirectory=.babel-cache'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader?outputStyle=expanded'])
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.s?css$/,
                /\.json$/
            ],
            loader: 'url-loader?name=[name].[ext]&limit=10000'
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=[name].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.OccurrenceOrderPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new ExtractTextPlugin('bundle.css')
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
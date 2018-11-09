var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    //Settingup mode
    mode: 'development',

    //Settingup entry
    entry: SRC_DIR + '/app/index.js',

    //Settingup output
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },

    //Settingup Modules
    module: {
        //Settingup loaders
        rules: [{
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};


module.exports = config;
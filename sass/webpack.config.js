const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }]
    }
};
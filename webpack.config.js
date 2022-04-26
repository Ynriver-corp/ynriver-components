const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            "@babel/plugin-transform-arrow-functions",
                            "@babel/plugin-transform-async-to-generator",
                            "@babel/plugin-transform-object-assign",
                            "@babel/plugin-transform-runtime",
                            "babel-plugin-styled-components"
                        ]
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['css-loader']
            },
        ]
    }
};

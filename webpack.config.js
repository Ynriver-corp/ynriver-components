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
                            "babel-plugin-styled-components",
                            "@babel/transform-react-jsx",
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-transform-object-assign",
                            "@babel/plugin-transform-arrow-functions",
                            "@babel/plugin-transform-async-to-generator"
                        ]
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};

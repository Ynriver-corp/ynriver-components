const path = require('path');

module.exports = {
    mode: 'production',
    entry: [path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        library: 'Button',
        libraryTarget: 'umd',
        globalObject: 'this',
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
                            "styled-components",
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
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        },
    },
};

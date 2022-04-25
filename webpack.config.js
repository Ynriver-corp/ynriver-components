const path = require('path');

module.exports = {
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        react: {root: 'React', amd: 'react', commonjs2: 'react', commonjs: 'react'},
    },
};

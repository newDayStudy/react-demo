const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        react: ['react', 'react-dom', 'react-router-dom', 'react-redux'],
        vendor: ['jquery', 'swiper', 'lodash', 'axios', 'antd']
    },
    output: {
        path: path.resolve(__dirname, 'public/vendor'),
        filename: '[name].dll.js',
        library: '[name]_dll_lib'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'public', 'vendor', '[name].manifest.json'),
            name: '[name]_dll_lib'
        })
    ]
}
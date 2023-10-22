const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const hardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

const apiMocker = require('mocker-api')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    // noParse:function (content) {
    //   return /jquery|lodash/.test(content)
    // } ,
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'happypack/loader?id=happyBabel',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: 'theme'
            }
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
      new HappyPack({
        id: 'happyBabel',
        loaders: [
          {
            path: 'babel-loader',
            cache: true
          }
        ],
        threadPool: happyThreadPool,
        verbose: true
      }),
    new hardSourceWebpackPlugin(),
    new CleanWebpackPlugin({}),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, './public/vendor/react.dll.js'),
      manifest: path.resolve(__dirname, './public/vendor/react.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, './public/vendor/vendor.dll.js'),
      manifest: path.resolve(__dirname, './public/vendor/vendor.manifest.json')
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    })
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: '.',
    open: false,
    before(app){
      apiMocker(app, path.resolve('./src/mock/mocker.js'))
    }
    // proxy: {
    //   "/api": {
    //     target: 'http://localhost:4000/',
    //     crossorigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  watch: true
}

var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?https://52.5.241.147:3000/',
    './src/main.js',
  ],
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
const path = require('path')
const webpack = require('webpack')

const output = () => ({
  filename: '[name].js',
  path: path.resolve(__dirname, 'build'),
  publicPath: '/',
  library: 'glamorous-stylus',
  libraryTarget: 'umd'
})

const externals = () => ({
  'stylus-in-react': 'stylus-in-react'
})

const jsLoader = () => ({
  test: /\.js$/,
  include: path.resolve(__dirname, 'src'),
  exclude: ['node_modules'],
  use: 'babel-loader'
})

const plugins = () => [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'production'
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false,
      ascii_only: true
    }
  })
]

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: output(),
  target: 'web',
  node: {
    fs: 'empty'
  },
  performance: {
    hints: 'error'
  },
  context: path.resolve(__dirname),
  devtool: 'source-map',
  externals: externals(),
  module: {
    rules: [jsLoader()]
  },
  plugins: plugins()
}
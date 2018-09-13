const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  plugins: [
    // Other plugins...

    new WorkboxPlugin.GenerateSW()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {
              target: { browsers: ['last 2 versions'] }
            }]
          ]
        }
      }
    ]
  },
  externals: [webpackNodeExternals()]
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

// error brings me to https://webpack.js.org/configuration/ 
// pretty sure ive got it set up correctly, but i dont know how to test it yet (remove comment before turning in)


const config = {
  entry: {
    app: './src/js/index.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Just Another Text Editor',
      short_name: 'J.A.T.E',
      description: 'A simple text editor',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'manifest.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },  
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
};

module.exports = () => {
  return {
    ...config,
  };
};

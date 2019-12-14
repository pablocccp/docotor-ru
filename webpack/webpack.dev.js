const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = require('./pages.json');

const configWebpak = {
  mode: 'development',
  node: {
    fs: 'empty',
  },
  entry: {},
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
     cacheGroups: {
      vendor: {
       test: /node_modules/,
       chunks: 'initial',
       name: 'vendor',
       enforce: true
      },
     }
    } 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=/img/[name]-[hash].[ext]' 
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
     
    ],
  },
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].map',
      exclude: ['vendor.js'],
      // append: '\n//# sourceMappingURL=[url]',
      // publicPath: '/',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../app/images'),
        to: `${path.resolve(__dirname, '../public/images')}/[name].[ext]`,
        toType: 'template'
      }
    ]),
  ],
};

pages.forEach(e => {
  configWebpak.entry = Object.assign(configWebpak.entry, e.entry)
  configWebpak.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['vendor', e.name],
      filename: `${e.name}.html`,
    })
  );
});

module.exports = configWebpak;
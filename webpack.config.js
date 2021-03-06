const path = require('path');

const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env, args) => {
  const config = {
    entry: './fancy-weather/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build'),
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          }],
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(sa|sc|c)ss$/,

          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          }],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
      new HtmlWebPackPlugin({
        template: './fancy-weather/index.html',
        filename: './index.html',
      }),
      new FaviconsWebpackPlugin({
        logo: './fancy-weather/assets/images/sunny.png',
        cache: true,
        mode: 'light',
        inject: true,
      }),
      new webpack.LoaderOptionsPlugin({
        test: /\.js$/,
        options: {
          eslint: {
            configFile: path.resolve(__dirname, '.eslintrc'), // this is my helper for resolving paths
            cache: false,
          },
        },
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 3000,
      stats: 'errors-only',
      clientLogLevel: 'none',
    },
  };

  if (args.mode === 'development') {
    config.devtool = 'cheap-module-eval-source-map';
  } else {
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()],
    };
  }

  return config;
};

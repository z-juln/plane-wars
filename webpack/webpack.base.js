const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: 'src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript'
            },
            minify: {
              compress: true,
            }
          },
          env: {
            coreJs: 3,
          },
          minify: true,
        },
      },
    }, 
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
      ],
    },
    {
      test: /\.less$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            esModule: false,
            modules: {
              auto: true,
              exportGlobals: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                'postcss-preset-env',
                {
                  'postcss-px-to-viewport': {
                    viewportWidth: 375,
                  },
                },
              ],
            },
          },
        },
        'less-loader',
      ],
    }, {
      test: /\.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 800,
        },
      }],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ].concat(isDev ? [] : [new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  })]),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    plugins: [new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
    })],
  },
};

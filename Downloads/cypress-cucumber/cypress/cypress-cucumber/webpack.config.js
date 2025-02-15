const path = require('path');
const webpack = require('webpack');


module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "process": require.resolve("process/browser")
    }
  },
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};

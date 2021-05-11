/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const StartServerPlugin = require('start-server-nestjs-webpack-plugin');

module.exports = {
  entry: {
    server: './src/server.ts',
  },
  mode: process.env.NODE_ENV ? 'development' : 'production',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    new StartServerPlugin({ name: 'server.js', nodeArgs: ['--inspect'] }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    // https://github.com/apollographql/apollo-server/issues/4637
    alias: {
      graphql$: path.resolve(__dirname, '../../node_modules/graphql/index.js'),
    },
  },
  devtool: 'source-map',
  target: 'node',
};

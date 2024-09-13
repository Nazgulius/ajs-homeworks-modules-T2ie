const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({      
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    ],  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader"],
      },
      {
        test: /\.html$/i,
        use: [
            HtmlWebpackPlugin.loader, 
            "html-loader"],
      },
    ],    
  },
};
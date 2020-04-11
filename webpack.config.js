const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs = require('fs');
// const PAGES_DIR = path.resolve(__dirname, 'src/pages');
// const PAGES = fs.readdirSync(PAGES_DIR);


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        filename: '3D-card.html',
        template: './src/easy/3D-card/3D-card.pug',
      })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
}
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  plugins: [   
      // Later,then I will figure out with Node.js, I will add dynamic path
      new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   filename : 'index.html',
    //   template :'src/index.pug'
    // }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
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

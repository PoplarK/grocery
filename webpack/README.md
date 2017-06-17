# Angular 项目中使用的 Webpack 配置文件

```
const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: './main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['.js', '.ts', '.less']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            // options: {
            //   configFileName: path.resolve(__dirname, 'tsconfig.json')
            // }
          },
          'angular2-template-loader'
        ]
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      // }, {
      //   test: /\.css$/,
      //   use: 'raw-loader'
      // }, {
      //   // 将 css 打包到 js 文件中
      //   test: /\.css$/,
      //   use: [{
      //     loader: 'style-loader'
      //   }, {
      //     loader: 'css-loader'
      //   }]
      // }, {
      //   // 将 css 抽取出来，最后打包到 css 文件中
      //   test: /\.css$/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader?sourceMap'
      //   })
      // }, {
      //   // 将 less 编译成 css 并将 css 打包到 js 文件中
      //   test: /\.less$/,
      //   use: [{
      //     loader: 'style-loader'
      //   }, {
      //     loader: 'css-loader'
      //   }, {
      //     loader: 'less-loader'
      //   }]
      }, {
        // 将 less 编译成 css 并将 css 抽取出来，最后打包到 css 文件中
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader?sourceMap'
          }, {
            loader: 'less-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = webpackConfig;
```

对于 Less 或 css 的处理，如果是使用 ExtractTextWebpackPlugin 抽取的话，那么在 Angular 2+ 里，如何使 Angular 的编译器对指定 styleUrls 的样式生成只作用于 Component 的样式（如添加 _ngcontent-c0）
module.exports = {
  /* entry 文件入口 */
  entry: './index.js',
  output: {
    path: __dirname,
    filename:'bundle.js'
  },
  module:{
    rules: [
      // loaders 从右向左开始读取，先执行css-loader(读取css文件,处理css url),
      { 
        test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  mode: 'development'
}
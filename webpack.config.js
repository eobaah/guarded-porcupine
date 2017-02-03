module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/index.js'
  },
  resolve: {
    extensions: ['.css','.js','.jsx' ]
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ['style!css'],
        include: __dirname + '/public'
      }
    ]
  }
}

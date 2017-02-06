module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/index.js'
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
      }
    ]
  }
}

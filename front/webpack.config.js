module.exports = {
  mode: 'development',
  entry: './src/containers/Main/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/../back/src/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
          ]
        }
      },
      { test: /\.css$/, use: ['style-loader','css-loader'] }
    ]
  },
  devtool: 'source-map'
}
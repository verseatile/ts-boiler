const path = require('path')

const config = {
  mode: "development",
  entry: ['./src/client/index.js'],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  target: "web",
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname + '/src')]
      },
	  {
        test: /\.(.ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|gif|png|svg|webp|woff|ttf|wav|mp3|mp4|pdf)$/,
        include: [path.resolve(__dirname + '/src')],
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
};

module.exports = config

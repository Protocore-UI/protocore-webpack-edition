module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'src/bundle.min.js'
  },
  'module': {
    loaders: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.handlebars$/,
      loader: "handlebars-loader"
    }]
  }
};

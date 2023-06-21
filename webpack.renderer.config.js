const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
},
  {
    test: /\.s[ac]ss$/i,
    use: ['css-loader', 'sass-loader']
  });

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};

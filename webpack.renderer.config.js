const rules = require('./webpack.rules');

rules.push(
  {
    test: /\.css$i/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(svg|jpg|png|webp)$/i,
    type: 'asset/resource'
  });

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};

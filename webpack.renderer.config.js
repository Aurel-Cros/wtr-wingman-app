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
    test: /\.(jpg|png|webp)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[name][ext]'
    }
  },
  {
    test: /\.svg$/i,
    type: 'asset/inline',
  });

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};

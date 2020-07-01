const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                'babel-plugin-styled-components'
              ],
              // nicolas had these
              // plugins: ['@babel/plugin-proposal-class-properties'],
              // plugins: ['babel-plugin-styled-components']
            }
          },
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    symlinks: false,
    extensions: [
      '.jsx', '.js', '.css'
    ]
  },
  mode: 'development'
};
const tailwindcss = require('tailwindcss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              tailwindcss('./tailwind.config.js'),
              require('autoprefixer')
            ]
          }
        }
      }
    ]
  }
};

var postcssSmart = require('postcss-smart-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssSmart,
    precss,
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ]
}

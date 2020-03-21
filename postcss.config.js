module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer')(),
    require('postcss-mixins')(),
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('postcss-extend')(),
    require('postcss-nested')(),
    require('postcss-inline-svg')(),
    require('postcss-assets')({
      basePath: 'images/'
    }),
    require('postcss-url')({ url: 'copy', useHash: true })
  ]
}
module.exports = {
    plugins: [
      require('autoprefixer')({}),
      require('postcss-simple-vars')({}),
      require('postcss-extend')({}),
      require('postcss-nested')({}),
      require('postcss-mixins')({}),
      require('postcss-url')({ url: 'copy', useHash: true }),
    ]
  }
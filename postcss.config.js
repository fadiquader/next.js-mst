module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    // require('precss'),
    // require('postcss-cssnext')({
    //   browsers: [
    //     '>1%',
    //     'last 4 versions',
    //     'Firefox ESR',
    //     'not ie < 9', // React doesn't support IE8 anyway
    //   ],
    //   flexbox: 'no-2009',
    // })
    // ,
    require('autoprefixer')({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }) // so imports are auto-prefixed too
  ],

};

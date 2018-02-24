require('babel-polyfill')
require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2016', "stage-2"],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node'
    ]
});
require('./index');
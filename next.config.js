const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const theme = require('./theme');

module.exports = {
  webpack: (config, { dev, isServer, buildId }) => {
    config.node = {
      fs: "empty"
    };
    let lessUse = [];
    let scssUse = [];
    const cssLoader = {
      loader: isServer ? 'css-loader/locals' : 'css-loader',
      options: {
        modules: false,
        minimize: !dev,
        sourceMap: dev,
        importLoaders: 1
      }
    }

    let postcssLoader = {
      loader: 'postcss-loader',
      options: {
        config: {
          path: 'postcss.config.js'
        }
      }
    }

    let lessLoader = {
      loader: 'less-loader',
      options: {
        modifyVars: theme
      }
    };

    let scssLoader = {
      loader: 'sass-loader',
      // options: {
      //   includePaths: ["./styles"]
      // }
    };

    let extractLESSPlugin = new ExtractTextPlugin({
      filename: 'static/style-ant.'+buildId+'.css',
      disable: dev
    });

    let extractSCSSPlugin = new ExtractTextPlugin({
      filename: 'static/[name].'+buildId+'.css',
      // allChunks: true,
      disable: dev
    });

    let extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/style.css',
      disable: dev
    });

    config.plugins.push(extractLESSPlugin)
    // config.plugins.push(extractSCSSPlugin)
    config.plugins.push(extractCSSPlugin)
    //
    // if (!extractCSSPlugin.options.disable) {
    //   extractCSSPlugin.options.disable = dev
    // }
    // if (!extractLESSPlugin.options.disable) {
    //   extractLESSPlugin.options.disable = dev
    // }

    if (isServer && cssLoader.options.modules) {
      lessUse = [cssLoader, postcssLoader, lessLoader].filter(Boolean)
      scssUse = [cssLoader, postcssLoader, scssLoader].filter(Boolean)
    } else if(isServer && !cssLoader.options.modules) {
      lessUse = ['ignore-loader']
      scssUse = ['ignore-loader']
    } else {
      lessUse = extractLESSPlugin.extract({
        use: [cssLoader, postcssLoader, lessLoader].filter(Boolean),
        // Use style-loader in development
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: dev,
            importLoaders: 1
          }
        }
      });
      scssUse = extractSCSSPlugin.extract({
        use: [cssLoader, postcssLoader, scssLoader].filter(Boolean),
        // Use style-loader in development
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: dev,
            importLoaders: 1
          }
        }
      });
    }

    // if(!dev && isServer) {
    //   config.module.rules[0].use.options.plugins.push(['import', { libraryName: 'antd' }])
    // }
    if(!dev && !isServer) {
      config.module.rules[0].use.options.plugins.push(['import', { libraryName: 'antd', style: !isServer }])
    } else if(dev && !isServer) {
      config.module.rules[1].use.options.plugins.push(['import', { libraryName: 'antd', style: !isServer }])
    }
    config.module.rules.push({
      test: /\.less$/,
      use: lessUse
    });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: scssUse
    // });

    config.module.rules.push({
      test: /\.(sc|c)ss$/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext].js",
          }
        },
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, "./.babelrc")
          }
        },
        "styled-jsx-css-loader",
        postcssLoader,
        {
          loader: "sass-loader",
          options: {
            sourceMap: dev
          }
        }
      ]
    });

    // use webpack analyzer
    //     conf.plugins.push(
    //         new BundleAnalyzerPlugin({
    //             // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
    //             analyzerMode: dev ? "server" : "static",
    //             analyzerHost: "127.0.0.1",
    //             analyzerPort: 8085,
    //             openAnalyzer: false
    //         })
    //     );

    return config
  }
}
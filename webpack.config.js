var path = require('path');
var webpack = require('webpack');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var ENTRY_POINTS = [
  './src/js/app'
];

var JS_LOADERS = [
  'babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'
];

var PLUGINS = [];
if (IS_PRODUCTION && process.env.MKT_ENV !== 'dev') {
  // Uglify in production, but not -dev.
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
          except: ['$super', '$', 'exports', 'require']
      }
    })
  );
}

module.exports = {
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    // Bundle will be built at ./src/media/js.
    path: './src/media/js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components|vr-markup)/,
        loaders: JS_LOADERS,
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  plugins: PLUGINS,
  resolve: {
    extensions: ['', '.js', '.json'],
    fallback: path.join(__dirname, 'node_modules'),
    modulesDirectories: [
      'src/js',
      'node_modules',
    ]
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  }
};

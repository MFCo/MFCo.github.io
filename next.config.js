const fs = require('fs');

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules.forEach(rule => {
      if (rule.loader === 'babel-loader') {
        if (process.env.DISABLE_CACHE) {
          rule.options.cacheDirectory = false;
        } else {
          rule.options.cacheIdentifier = JSON.stringify({
            'babel-loader': require('babel-loader/package.json').version,
            'babel-core': require('babel-core/package.json').version,
            babelrc: fs.readFileSync('./.babelrc', 'utf8'),
            env: process.env.BABEL_ENV || process.env.NODE_ENV || 'development',
            locale: process.env.LOCALE
          });
        }
      }
    });

    config.module.rules.push(
      {
        test: /\.css$/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    );
    // Important: return the modified config
    return config;
  }
};
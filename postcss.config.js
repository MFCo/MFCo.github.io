module.exports = ({ env }) => {
  var options = {};
  if (env === 'production') {
    options = {
      preset: 'default'
    };
  }

  return {
    plugins: [require('postcss-cssnext'), require('postcss-easy-import')(), require('cssnano')(options)]
  };
};
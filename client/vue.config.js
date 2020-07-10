const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api/user': {
        target: 'http://localhost:5000'
      }
    }
  },
};
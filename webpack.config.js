const path = require('path');
const config = {
    entry: './src/index.js', //relative path
    output: {
        path: path.resolve(__dirname, 'dist'), //it requires absolute path, so use node.js path module
        filename: 'bundle.js'
    }
};

module.exports = config;
// In your routes configuration file
const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/home/index.tsx'),
  },
];

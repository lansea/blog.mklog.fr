// Just a basic server setup for this site

require.paths.unshift(__dirname + "/lib");

var Connect = require('connect'),
  wheat = require('wheat');
  
module.exports = Connect.createServer(
  //Connect.logger(),
  Connect.conditionalGet(),
  Connect.cache(),
  Connect.gzip(),
  wheat(__dirname, {theme: 'harmonious'})
).listen(3000);
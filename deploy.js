'use strict';
var path = require('path');
var ghpages = require('gh-pages');

main();

function main() {
  ghpages.publish(path.join(__dirname, './site'), console.error.bind(console));
}

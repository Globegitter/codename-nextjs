'use strict';

require("babel/register")({
  stage: 0
});

let App = require('./app.js');
let server = new App();
server.start();

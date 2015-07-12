'use strict';

require("babel/register")({
  stage: 0
});

let NextServer = require('./server.js');
let server = new NextServer();
server.start();

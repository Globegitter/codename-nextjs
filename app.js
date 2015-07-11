import {System} from 'es6-module-loader';
System.transpiler = 'babel';
import http from 'http';

export default class NextApp{
  start() {
    //Lets define a port we want to listen to
    const PORT=8080;

    //We need a function which handles requests and send response
    function handleRequest(req, res) {
      let path = req.url.slice(1);

      System.import(`./app/cards.js`).then(function(Resource) {
        console.log('-------', Resource);
        let resource = new Resource.default();
        console.log(resource.get());
      });
      
      // res.end(`It Works!! Path Hit: ${req.url}`);
    }

    //Create a server
    var server = http.createServer(handleRequest);

    //Lets start our server
    server.listen(PORT, function(){
      //Callback triggered when server is successfully listening. Hurray!
      console.log("Server listening on: http://localhost:%s", PORT);
    });
  }
}

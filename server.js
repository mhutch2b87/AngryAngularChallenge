const express = require('express');
const app = express();
var path = require('path');

// tell our Express server what file directory to use
app.use(express.static(__dirname + '/dist/demohood'));

//tell our express server what port to listen on
app.listen(process.env.PORT || 8080);

//start angular application via index file
app.get('/*',function(req, res){
  res.sendFile(path.join(__dirname + '/dist/demohood/index.html'));
})

console.log('Console Listening on port 8080');

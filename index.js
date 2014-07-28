var express = require('express');

var app = express();

app.get('/', function(req, res) {

res.send('<center style="margin: 90px auto;"><h2>Your Daily Cat Image</h2><img src="http://theoldreader.com/kittens/600/400" /></center>');

});

app.listen(3000, function(){ console.log('Running on port 3000'); });

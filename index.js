var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<center style="margin: 90px auto;"><h2>Your Daily Cat Image</h2><img src="http://theoldreader.com/kittens/600/400" /></center>');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

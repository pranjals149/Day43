const http = require('http');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('OpenGenus');
});

server.listen(3000, (err) => {
    if (err) { console.log(err); }
    else{ console.log(`Server running`); }
});
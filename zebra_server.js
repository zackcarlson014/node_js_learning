let http = require('http');

let server = http.createServer(function(req, res) {
    console.log(req.headers)
    res.write('<h1>Zebra</h1>')
    res.end()
});

server.listen(3000, function() {
    console.log('Started listening on port 3000')
});
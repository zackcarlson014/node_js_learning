let http = require('http');

let contactStorage = [
    {name: 'Jimmy', phoneNumber: '555-555-5555'},
    {name: 'Zack', phoneNumber: '555-555-5556'},
    {name: 'Pedro', phoneNumber: '555-555-5557'},
    {name: 'Maria', phoneNumber: '555-555-5559'},
];

http.createServer(function(req, res) {
    console.log(req.headers)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(contactStorage))
    res.end()
}).listen(3000, function() {
    console.log('Started listening on port 3000')
});


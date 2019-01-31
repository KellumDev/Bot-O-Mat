const http = require('http');
const app = require('./app');


const port = process.env.PORT || 1626;

const server = http.createServer(app);

//server.listen(port);


server.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});
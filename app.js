var http = require('http')


http.createServer(function (req, res){
    res.end("asdfasdf\n")
}).listen(4000);

console.log("Server is running in http://127.0.0.1:3000/")
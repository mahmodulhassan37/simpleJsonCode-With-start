var http = require('http');

var server = http.createServer(function(req,res) {
	// body...

	if(req.url =="/")
	{
		res.writeHead(200,{'content-Type':'txt/html'})
			res.write('<h1> this is Home page</h1>')
             res.end();
	}

	else if(req.url == "/contact")
	{
		res.writeHead(200,{'content-Type':'txt/html'})
		res.write('<h1> this is contact page<h1>')
		res.end();
	}

	else if(req.url == "/data")
	{
		res.writeHead(200,{'content-Type': 'txt/html'})
		res.write('<h1>this data page found</h1>')
		res.end();
	}

})

server.listen(3000);
console.log("the server is successfully started in 3000....");
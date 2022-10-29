const http = require('http');
var fs = require('fs');
var fileName = "portfolio.html";


const PORT=8080; 

fs.readFile('./portfolio.html', function (err, html) {

    if (err) throw err;    

    const server = http.createServer(function(request, response) {  
        
      //  response.write("eee");
        if(request.url === "/")
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    
    });
    
    server.on('connection', (socket) =>
{
    console.log('New connection...');
}

)
server.listen(8000);

console.log('Listening on port 8000...'); 
});

/*const server = http.createServer( function (req, res)
{
    if(req.url === "/")
        {
          //  res.write("Hello world");
           // renderHTML('portfolio.html');
            var stream = fs.createWriteStream(fileName);
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});
            res.end();
        }
    if(req.url === "/api/courses")
    {
        res.write(JSON.stringify( [1,2,3,4,5]));
        res.end(); 
        
    }

}
);
server.on('connection', (socket) =>
{
    console.log('New connection...');
}

)
server.listen(3000);

console.log('Listening on port 3000...');
function buildHtml(req) {
    var header = '';
    var body = '';
  
    // concatenate header string
    // concatenate body string
  
    return '<!DOCTYPE html>'
         + '<html><head>' + header + '</head><body>' + body + '</body></html>';
  };
  */
/*
fs.readFile('./portfolio.html', function (err, html) {
    if (err) {
        throw err; 
    }       
   http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
*/
/*
const server = http.createServer( function (req, res)
{
    if(req.url === "/")
        {
            res.write("Hello world");
          //  renderHTML('portfolio.html');
            res.end();
        }
    if(req.url === "/api/courses")
    {
        res.write(JSON.stringify( [1,2,3,4,5]));
        res.end(); 
        
    }

}
);

server.on('connection', (socket) =>
{
    console.log('New connection...');
}

)
server.listen(3000);

console.log('Listening on port 3000...'); 
*/
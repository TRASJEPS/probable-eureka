const http = require("http");
const fs = requie("fs");

//FINISH LATER111

const server = http.createServer(function(request, response) {
 console.log("Client Requested URL:", request.url);

 if(request.url === "/"){
     fs.readFile("index.html", "utf8", function (errors, conents){
         response.writeHead(200, {"Content-Type": "text/html"});
         response
         response
     }
     
     
     )} 


})

// IN NODE YOU TYPICALLY USE PORT #8000
// BUT Y THOU
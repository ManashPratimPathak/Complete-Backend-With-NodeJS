const http = require("http");

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === "/") // triple equal sign means if the value is string and has the same value
    {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body> <form action='/message' method ='POST'> <input type='text'> <button type='submit'>Send</button> </form> </body>");
        res.write("</html>");
        return res.end();
    }
});

server.listen(3000);

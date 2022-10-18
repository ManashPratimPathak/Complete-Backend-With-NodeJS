const http = require("http");

const server = http.createServer( (req,res) =>
{
    // console.log("Server is started running on port 3000");
    // res.write("Hello");
    // res.end();

    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.write("<html>")
        res.write("<head> <title> List of Users! </title></head>")
        res.write("<body> <form action='/create-user' method='POST'> <input type='text' name='username' placeholder='username'>  <button type=''submit'> Submit </button> </form> </body>")
        res.write("<html>")
        return res.end();
        
    }
    else if (url ==="/users")
    {
        res.write("<html>")
        res.write("<head> <title> List of Users! </title></head>")
        res.write("<body> <ul> <li>Manash</li><li>Sunny</li><li>Rishtek</li> </ul> </body>")
        res.write("<html>")
        return res.end();
    } 
    else if( url==="/create-user" && method ==="POST"){
        const body = [];
        req.on("data", (chunk)=>{
            body.push(chunk);
        });
        req.on("end", ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split("=")[1];
            console.log(user);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
        
    }
});

server.listen(3000);
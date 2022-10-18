const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>")
        res.write("<head><title>Greetings!</title></head>")
        res.write('<form action="/create-users" method="POST"><input type="text" name="username"><button type="submit"> Submit</button></form>')
        res.write("</html>")
        return res.end()
    }
    if (url === "/create-users" && method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split("=")[0];
            console.log(data);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });



    };
});

server.listen(3000);
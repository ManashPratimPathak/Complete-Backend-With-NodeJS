const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>Message</title> </head>");
    res.write(
      "<body> <form action='/message' method='POST'> <input type='text' name='message'> <button type='submit'>Send</button> </form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const ParseBody = Buffer.concat(body).toString();
      const message = ParseBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
      });
    });
  }
});

server.listen(3000);

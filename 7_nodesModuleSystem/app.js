const http = require("http");

const routes = require("./routes"); //  since it is not a global module so we have to add local path is added using ./

console.log(routes.sometext);
const server = http.createServer(routes.handler);

server.listen(3000);

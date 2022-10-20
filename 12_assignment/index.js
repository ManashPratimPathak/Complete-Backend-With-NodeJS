const express = require("express");

const app = express();

app.use("/users", (req, res, next)=>{
    res.send("<h1>This is your response!</h1>");
});

app.use("/", (req, res, next)=>{
    res.send("Hello User");
});

app.listen(3000);
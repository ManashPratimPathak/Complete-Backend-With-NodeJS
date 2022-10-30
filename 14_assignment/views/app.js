const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

const usersRoutes = require("../routes/users");
const addUserData = require("../routes/add-user");

app.use(usersRoutes);
app.use(addUserData.routes);

app.use("/", (req, res, next)=>{
    res.status(404).render("404");
});

app.listen(3000, (req, res, next)=>{
    console.log("server running");
});
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expresshbs = require("express-handlebars");

const app = express();

app.engine("hbs", expresshbs({layoutsDir: "views/layout/", defaultLayout: "main-layout", extname: "hbs"}));
// app.set("view engine", "pug");//for pug-template
app.set("view engine", "hbs");
app.set("views", "views"); 

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes); 
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render("404",{docTitle: "Page not found"});
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

 app.listen(4000);
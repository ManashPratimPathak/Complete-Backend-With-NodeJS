const express = require("express");
const path = require("path");
const rootDir = require("../util/path")
const router = express.Router();
const adminData = require("./admin");



router.get('/', (req, res, next)=>{
    console.log("shop.js "+ adminData.products);
    res.sendFile(path.join(rootDir,"views", "shop.html")); // res.sendFile('/views/shop.html'); this doesnt work because / here refer to root folder of our computer
});
//__dirname is the global variable defined by nodejs that holds tha absolute path of our operating system to our project folder
module.exports = router;
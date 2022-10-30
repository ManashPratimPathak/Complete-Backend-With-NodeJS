const express = require("express");
const router = express.Router();

const usersData = [];

router.post("/add-user", (req, res, next)=> {
    usersData.push({userName : req.body.user});
    res.redirect("/");
});

router.get("/add-user", (req, res, next)=>{
    res.render("add-user");
});


exports.routes = router;
exports.usersData= usersData;

const express = require("express");
const router = express.Router();

const addUserData = require("./add-user");

router.get("/", (req, res, next)=>{
    const usersData = addUserData.usersData;
    res.render("users", {users: usersData});
});

module.exports = router;

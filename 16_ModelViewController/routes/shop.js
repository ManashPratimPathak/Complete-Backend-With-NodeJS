const express = require("express");
const path = require("path");
const router = express.Router();

const productsController = require("../controllers/products");


router.get('/', productsController.getProducts);
//__dirname is the global variable defined by nodejs that holds tha absolute path of our operating system to our project folder
module.exports = router;
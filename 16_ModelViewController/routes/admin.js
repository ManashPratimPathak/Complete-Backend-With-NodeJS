const express = require('express');
const path = require("path");
const router = express.Router();
const productsController = require("../controllers/products");
const { builtinModules } = require('module');

router.get("/admin/add-product", productsController.getAddProduct);

router.post('/admin/add-product', productsController.postAddProduct);

module.exports = router;
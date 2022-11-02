const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        docTitle: "add-product",
        path: '/admin/add-product',
        activeAddProduct: true,
        fromCSS: true,
        productCSS: true
    });
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // const products = adminData.products;
    res.render('shop', {
        prods: products,
        docTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        productCSS: true,
        activeShop: true
    });
}
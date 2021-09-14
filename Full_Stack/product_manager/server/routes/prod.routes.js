const ProductController = require("../controllers/prod.controller");


module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/product/:id", ProductController.findOneProduct);
    app.post("/api/new/product/", ProductController.createNewProduct);
    app.put("/api/update/product/:id", ProductController.updateExistingProduct);
    app.delete("/api/delete/product/:id", ProductController.deleteProduct);
}
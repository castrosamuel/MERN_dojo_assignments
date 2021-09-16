const AuthorController = require("../controllers/authors.controller");


module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/author/:id", AuthorController.findOneAuthor);
    app.post("/api/new/author/", AuthorController.createNewAuthor);
    app.put("/api/update/author/:id", AuthorController.updateExistingAuthor);
    app.delete("/api/delete/author/:id", AuthorController.deleteAuthor);
}
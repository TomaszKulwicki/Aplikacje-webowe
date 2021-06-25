const controller = require('../controllers/product.controllers');

module.exports = function(app) {
  app.get("/products", controller.getAll);
  app.post("/products", controller.add);
  app.put("/products", controller.update)
  app.delete("/products/:id", controller.delete)
};
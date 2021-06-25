const controller = require('../controllers/category.controllers');

module.exports = function (app) {
    app.get('/categories', controller.getAll);
    app.post('/categories', controller.add);
    app.put('/categories', controller.update);
};
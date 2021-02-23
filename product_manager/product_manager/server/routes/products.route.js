//import controllers
const ProductsController = require('../controllers/products.controller');

//create the valid routes
module.exports = (app) => {                             //LAY GROUNDWORK FOR CONTROLLER
    app.get('/api/products',  ProductsController.getAll);   //calling it this becuase this is about products
    app.post('/api/products', ProductsController.create);
    app.get('/api/products/:id', ProductsController.getOne);
    app.put('/api/products/:id', ProductsController.update);   //THIS IS THE UPDATER or EDITOR
    app.delete('/api/products/:id', ProductsController.delete);
} 
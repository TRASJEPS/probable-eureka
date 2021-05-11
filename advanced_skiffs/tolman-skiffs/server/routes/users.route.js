//import controllers
const UsersController = require('../controllers/skiffs.controller');
const { authenticate } = require("../config/jwt.config");
//ALWAYS BEGIN WITH /API/ for EACH ROUTING START
//create the valid routes
// NOTING THE VERB IS WHATS IMPORTANT
module.exports = (app) => {                             //LAY GROUNDWORK FOR CONTROLLER
    app.get('/api/users',  UsersController.getAll);   //calling it this becuase this is about skiffs
    app.post('/api/users', UsersController.create);
    app.get('/api/users/:id', UsersController.getOne);
    app.put('/api/users/:id', UsersController.update);   //THIS IS THE UPDATER or EDITOR
    app.delete('/api/users/:id', UsersController.delete);  //FOR EVERY MODEL I NEED A UNIQUE ROUTE!!!! for delete
    app.post('/api/user/register', UsersController.register);
    app.post('/api/users', UsersController.create);
    app.post('/api/users', UsersController.create);
};
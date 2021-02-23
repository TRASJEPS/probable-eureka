//import controllers
const SkiffsController = require('../controllers/skiffs.controller');

//create the valid routes
module.exports = (app) => {                             //LAY GROUNDWORK FOR CONTROLLER
    app.get('/api/skiffs',  SkiffsController.getAll);   //calling it this becuase this is about skiffs
    app.post('/api/skiffs', SkiffsController.create);
    app.get('/api/skiffs/:id', SkiffsController.getOne);
    app.put('/api/skiffs/:id', SkiffsController.update);   //THIS IS THE UPDATER or EDITOR
    app.delete('/api/skiffs/:id', SkiffsController.delete);
} 
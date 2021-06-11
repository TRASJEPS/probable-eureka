//import controllers
const MachinesController = require('../controllers/machines.controller');

// EVERY ROUTE NEEDS A CONTROLLER 

//ALWAYS BEGIN WITH /API/ for EACH ROUTING START
//create the valid routes
// NOTING THE VERB IS WHATS IMPORTANT
module.exports = (app) => {                             //LAY GROUNDWORK FOR CONTROLLER
    app.get('/api/machines',  MachinesController.getAll);   //calling it this becuase this is about machines


    // SETUP AUTHENTICATE HERE!!!!
    app.post('/api/machines', MachinesController.create);


    app.get('/api/machines/:id', MachinesController.getOne);
    app.put('/api/machines/:id', MachinesController.update);   //THIS IS THE UPDATER or EDITOR
    app.delete('/api/machines/:id', MachinesController.delete);  //FOR EVERY MODEL I NEED A UNIQUE ROUTE!!!! for delete
};
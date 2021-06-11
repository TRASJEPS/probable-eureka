const MachinesController = require('../controllers/machines.controller');

module.exports = (app) => {                            
    app.get('/api/machines',  MachinesController.getAll);  
    app.post('/api/machines', MachinesController.create);
    app.get('/api/machines/:id', MachinesController.getOne);
    app.put('/api/machines/:id', MachinesController.update);   
    app.delete('/api/machines/:id', MachinesController.delete);  
};
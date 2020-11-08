module.exports = (app) => {
    const cliente = require('../controllers/controller.js');

    // Create a new todo
    app.post('/clientes', cliente.create);

    // Retrieve all cliente
    app.get('/clientes', cliente.findAll);

    // Retrieve a single todo by id
    app.get('/clientes/:id', cliente.findOne);

    // Update a Todo with id
    app.put('/clientes/:id', cliente.update);

    // Delete a Todo by id
    app.delete('/clientes/:id', cliente.delete);
}
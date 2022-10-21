const express = require('express');
const routes = express.Router();
const UserController = require('./controller/userController');
// const { registerWithEmailAndPassword } = require('./controller/authController');

routes.get('/users', UserController.list);
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// routes.post('/register', registerWithEmailAndPassword);

module.exports = routes;
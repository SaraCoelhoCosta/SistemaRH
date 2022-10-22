const express = require('express');
const routes = express.Router();
const UserController = require('./controller/userController');

routes.get('/sair', UserController.sair);
routes.get('/verificarLogin', UserController.verificarLogin);

routes.post('/logar', UserController.logar);
routes.post('/cadastrar', UserController.cadastrar);

module.exports = routes;

const express = require('express');
const routes = express.Router();
const UserController = require('./controller/userController');

routes.get('/', UserController.logar);
routes.get('/dashboard', UserController.sair);
routes.post('/cadastrar', UserController.cadastrar);
routes.get('/verificar', UserController.verificarLogin);

module.exports = routes;

const express = require('express');

const Ongcontroller = require('./controllers/Ongcontroller');
const Incidentcontroller = require('./controllers/Incidentcontroller');
const Profilecontroller = require('./controllers/Profilecontroller');
const Sessioncontroller = require('./controllers/Sessioncontroller');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);
routes.get('/profile', Profilecontroller.index);

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.post('/incidents', Incidentcontroller.create);
routes.get('/incidents', Incidentcontroller.index);
routes.delete('/incidents/:id', Incidentcontroller.delete);

routes.post('/ongs', Ongcontroller.create);
module.exports = routes; // exportando rotas

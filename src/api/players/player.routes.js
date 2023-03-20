const express = require('express');
const upload = require('../../utils/middlewares/uploadFile.middleware');
const {getAllPlayers,postPlayer, putPlayer} = require('./player.controller');

const playerRoutes = express.Router();



playerRoutes.get('/', getAllPlayers);
playerRoutes.post('/', upload.single('photo'), postPlayer );//al ser distintos metodos get y post se puede usar el mismo endpoint para distintas peticiones, no las mismas
playerRoutes.put('/:id', upload.single('photo'),putPlayer);

module.exports = playerRoutes
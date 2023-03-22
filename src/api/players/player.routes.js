const express = require('express');
const upload = require('../../utils/middlewares/uploadFile.middleware');
const {getAllPlayers,postPlayer, putPlayer, deletePlayer} = require('./player.controller');

const playerRoutes = express.Router();



playerRoutes.get('/', getAllPlayers);
playerRoutes.post('/', upload.single('photo'), postPlayer );//al ser distintos metodos get y post se puede usar el mismo endpoint para distintas peticiones, no las mismas
playerRoutes.put('/:id', upload.single('photo'),putPlayer);
playerRoutes.delete('/:id', deletePlayer );

module.exports = playerRoutes
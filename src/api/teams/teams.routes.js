const express= require('express');
const {getAllTeams, getTeam, postTeam, deleteTeam} = require('./teams.controller');

const teamRoutes = express.Router();

teamRoutes.get('/', getAllTeams);
teamRoutes.get('/:id', getTeam);
teamRoutes.post('/', postTeam);
teamRoutes.delete('/:id', deleteTeam);

module.exports= teamRoutes;
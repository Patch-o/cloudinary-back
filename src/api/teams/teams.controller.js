const Team = require("./teams.model");

const getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    return res.status(200).json(teams);
  } catch (error) {
    return next(error);
  }
};

const getTeam = async (req, res, next) => {
  try {
    const {id} = req.params;
    const teams = await Team.findById(id).populate('players');
    return res.status(200).json(teams);
  } catch (error) {
    return next(error);
  }
};

const postTeam = async (req, res, next) => {
    try {
        const team = new Team(req.body);
        const savedTeam = await team.save();
        return res.status(201).json(savedTeam);
    } catch (error) {
        return next(error);
            }
};

const deleteTeam = async ( req, res, next) => {
    try {
        const {id} = req.params;
        const teamDeleted = await Team.findByIdAndDelete(id);
        return res.status(200).json(teamDeleted);
    } catch (error) {
        return next(error);
    }
}


module.exports = {getAllTeams, getTeam, postTeam, deleteTeam}
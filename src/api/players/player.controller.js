const Player = require("./player.model");
const { deleteFile } = require("../../utils/middlewares/deleteFile.middleware");

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await Player.find();
    return res.status(200).json(players);
  } catch (error) {
    return next(error);
  }
};

const postPlayer = async (req, res, next) => {
  try {
    const player = new Player(req.body);

    //Getting de img from the form
    if (req.file) {
      player.photo = req.file.path;
    }

    const newPlayer = await player.save();
    return res.status(201).json(newPlayer);
  } catch (error) {
    return next(error);
  }
};

const putPlayer = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const player = new Player(req.body);
        player._id = id;
        
        if(req.file){
            player.photo = req.file.path;
        }

        const playerDb = await Player.findByIdAndUpdate(id, player);
        if(playerDb.photo){
            deleteFile(playerDb.photo)
        }
        return res.status(200).json(playerDb);
    } catch (error) {
        return next(error);
    }
}



module.exports = {
  getAllPlayers,
  postPlayer,
  putPlayer
};

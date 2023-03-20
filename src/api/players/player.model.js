const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    name: {type: String, required: true},
    dorsal: {type: String, required: true},
    photo: {type: String},
},
{
    timestamps: true
});

const Player = mongoose.model("Player", playerSchema);

module.exports= Player;
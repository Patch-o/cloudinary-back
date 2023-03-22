const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: String, required: true},
    players: [{type: Schema.Types.ObjectId,  ref: "Player"}]
},
{
    timeseries: true
});


const Team = mongoose.model('Team', teamSchema );
module.exports = Team;
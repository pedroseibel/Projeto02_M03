const mongoose = require("mongoose");  //Imports Mongoose

const statesModel = new mongoose.Schema({ //Creates the DB
    name: { type: String, required: true }, 
    region: { type: String, required: true },
    population: { type: Number, required: true },
    minimumWage: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const State = mongoose.model("States",statesModel); //Creates the model in the States collection

module.exports = State; //Exports the finished model
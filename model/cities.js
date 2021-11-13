const mongoose = require("mongoose");  //Imports Mongoose

const citiesModel = new mongoose.Schema({ //Creates the DB
    name: { type: String, required: true }, 
    districtQty: { type: Number, required: true },
    population: { type: Number, required: true },
    anniversary: { type: Date, required: true },
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const City = mongoose.model("Cities",citiesModel); //Creates the model in the Cities collection

module.exports = City; //Exports the finished model
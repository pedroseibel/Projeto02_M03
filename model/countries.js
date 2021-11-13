const mongoose = require("mongoose");  //Imports Mongoose

const countriesModel = new mongoose.Schema({ //Creates the DB
    name: { type: String, required: true }, 
    population: { type: Number, required: true },
    language: { type: String, required: true },
    gdp: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const Country = mongoose.model("Countries",countriesModel); //Creates the model in the Countries collection

module.exports = Country; //Exports the finished model
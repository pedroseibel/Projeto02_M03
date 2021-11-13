const express = require("express"); //Imports Express
const app = express(); //defines the app as Express
require("dotenv").config(); //.env configuration to access environment variables
app.use(express.json()); //Defines the JSON

const Conn = require("./model/conn/index"); //Imports the connection

Conn(); //Connection function

const citiesRouter = require("./routers/cities.routes");
app.use("/cities", citiesRouter);

const statesRouter = require("./routers/states.routes");
app.use("/states", statesRouter);

const countriesRouter = require("./routers/countries.routes");
app.use("/countries", countriesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

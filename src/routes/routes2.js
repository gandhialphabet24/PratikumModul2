const express = require("express");
const bodyParser = require("body-parser"); // memanggil library body-parser
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const controller2 = require("../controllers/controller2");

app.get("/celcius/:c", controller2.celcius);
app.get("/reamur/:r", controller2.reamur);
app.get("/kelvin/:k", controller2.kelvin);
app.get("/fahrenheit/:f", controller2.fahrenheit);

module.exports = app;

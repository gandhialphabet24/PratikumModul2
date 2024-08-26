const express = require("express");
const bodyParser = require("body-parser"); // memanggil library body-parser
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const controller4 = require("../controllers/controller4");

app.post("/calculateBMI", controller4.calculateBMI);

module.exports = app;

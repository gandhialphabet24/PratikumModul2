const express = require("express");
const bodyParser = require("body-parser"); // memanggil library body-parser
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const controller3 = require("../controllers/controller3");

app.post("/desimalKeOktal", controller3.desimalKeOktal);
app.post("/desimalKeBiner", controller3.desimalKeBiner);
app.post("/desimalKeHeksadesimal", controller3.desimalKeHeksadesimal);

// // Rute untuk konversi desimal ke biner
// app.post("/decimal-to-binary, controller3.desimalKeBiner);

// // Rute untuk konversi desimal ke oktal
// router.post('/decimal-to-octal', controller3.desimalKeOktal);

// // Rute untuk konversi desimal ke heksadesimal
// router.post('/decimal-to-hexadecimal', controller3.desimalKeHeksadesimal);

module.exports = app;

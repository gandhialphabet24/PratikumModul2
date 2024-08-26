const express = require("express"); // memanggil library express js
const cors = require("cors"); // memanggil library cors
const app = express();

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());
// endpoint "/test" dengan method GET

//import routes
const praktikum = require("./routes/praktikumRoutes");
const soal1 = require("./routes/routes1");
const soal2 = require("./routes/routes2");
const soal3 = require("./routes/routes3");
const soal4 = require("./routes/routes4");

//implementasi routes
app.use("/praktikum", praktikum);
app.use("/soal1", soal1);
app.use("/soal2", soal2);
app.use("/soal3", soal3);
app.use("/soal4", soal4);

app.get("/test", (req, res) => {
  // req merupakan variabel yang berisi data request
  // res merupakan variabel yang berisi data response dari end-point
  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
});
// menjalankan server pada port 4000
app.listen(4000, () => {
  console.log("Server run on port 4000");
});

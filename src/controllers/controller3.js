const { response } = require("../routes/routes2");

// Fungsi untuk mengonversi desimal ke biner
exports.desimalKeBiner = (req, res) => {
  const angka = req.body.angka;
  let biner = "";
  let temp = angka;

  while (temp > 0) {
    biner = (temp % 2) + biner;
    temp = Math.floor(temp / 2);
  }

  res.json({ Hasilnya: biner || "temp" });
};

// Fungsi untuk mengonversi desimal ke oktal
exports.desimalKeOktal = (req, res) => {
  const angka = req.body.angka;
  let oktal = "";
  let temp = angka;

  while (temp > 0) {
    oktal = (temp % 8) + oktal;
    temp = Math.floor(temp / 8);
  }

  res.json({ Hasilnya: oktal || "temp" });
};

// Fungsi untuk mengonversi desimal ke heksadesimal
exports.desimalKeHeksadesimal = (req, res) => {
  const angka = req.body.angka;
  const hexMap = "0123456789ABCDEF";
  let heksadesimal = "";
  let temp = angka;

  while (temp > 0) {
    heksadesimal = hexMap[temp % 16] + heksadesimal;
    temp = Math.floor(temp / 16);
  }

  res.json({ Hasilnya: heksadesimal || "temp" });
};

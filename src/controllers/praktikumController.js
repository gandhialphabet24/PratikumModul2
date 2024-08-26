const { response } = require("../routes/praktikumRoutes");

exports.profil = (req, res) => {
  let name = req.params.name;
  let age = req.params.age;
  let response = {
    nama: name,
    umur: age,
  };
  return res.json(response);
};

exports.bujur_sangkar = (req, res) => {
  let panjang = Number(req.body.panjang);
  let lebar = Number(req.body.lebar);
  let luas = panjang * lebar;
  let keliling = 2 * (panjang + lebar);

  let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling,
  };
  return res.json(response);
};

exports.bangunRuang = (req, res) => {
  let sisi = Number(req.body.sisi);
  let panjanglimas = Number(req.body.panjanglimas);
  let lebarlimas = Number(req.body.lebarlimas);
  let tinggilimas = Number(req.body.tinggilimas);
  let jarijaritabung = Number(req.body.jarijaritabung);
  let tinggitabung = Number(req.body.tinggitabung);
  let jarijaribola = Number(req.body.jarijaribola);

  let luaskubus = 6 * sisi * sisi * sisi;
  let volumekubus = sisi * sisi * sisi;
  let luaslimas =
    2 *
    (panjanglimas * lebarlimas +
      panjanglimas * tinggilimas +
      lebarlimas * tinggilimas);
  let volumelimas = panjanglimas * lebarlimas * tinggilimas;
  let luastabung =
    ((2 * 22) / 7) * jarijaritabung * (jarijaritabung + tinggitabung);
  let volumetabung = (22 / 7) * jarijaritabung * jarijaritabung * tinggitabung;
  let luasbola = ((4 * 22) / 7) * jarijaribola * jarijaribola;
  let volumebola =
    (((4 / 3) * 22) / 7) * jarijaribola * jarijaribola * jarijaribola;

  let response = {
    luas_kubus: luaskubus,
    volume_kubus: volumekubus,
    luas_limas: luaslimas,
    volume_limas: volumelimas,
    luas_tabung: luastabung,
    volume_tabung: volumetabung,
    luas_bola: luasbola,
    volume_bola: volumebola,
  };
  return res.json(response);
};

// Menghitung BMI dan mengembalikan hasil
exports.calculateBMI = (req, res) => {
  const { berat, tinggi } = req.body;

  // Validasi input
  if (!berat || !tinggi) {
    return res.status(400).json({
      status: "error",
      message: "Please provide weight and height",
      data: null,
    });
  }

  // Perhitungan BMI
  const bmi = (berat / (tinggi * tinggi)) * 10000;
  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  // Response dengan struktur JSON
  res.json({
    tinggi: tinggi,
    berat: berat,
    data: {
      bmi: bmi,
      status: category,
    },
  });
};

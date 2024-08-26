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

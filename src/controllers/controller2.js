exports.celcius = (req, res) => {
  let c = Number(req.params.c);
  let f = (9 / 5) * c + 32;
  let k = c + 273;
  let r = (4 / 5) * c;
  let response = {
    celcius: c,
    fahrenheit: f,
    kelvin: k,
    reamur: r,
  };
  return res.json(response);
};

exports.reamur = (req, res) => {
  let r = Number(req.params.r);
  let f = r * 2.25 + 32;
  let k = (r * 5) / 4 + 273.15;
  let c = (4 / 5) * r;
  let response = {
    celcius: c,
    fahrenheit: f,
    kelvin: k,
    reamur: r,
  };
  return res.json(response);
};

exports.kelvin = (req, res) => {
  let k = Number(req.params.k);
  let f = ((k + 459.67) * 5) / 9;
  let r = (5 / 4) * k + 273.15;
  let c = k - 273;
  let response = {
    celcius: c,
    fahrenheit: f,
    kelvin: k,
    reamur: r,
  };
  return res.json(response);
};

exports.fahrenheit = (req, res) => {
  let f = Number(req.params.f);
  let k = (5 / 9) * f - 32 + 273;
  let r = (4 / 9) * f - 32;
  let c = (5 / 9) * f - 32;
  let response = {
    celcius: c,
    fahrenheit: f,
    kelvin: k,
    reamur: r,
  };
  return res.json(response);
};

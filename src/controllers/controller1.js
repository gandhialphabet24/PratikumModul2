exports.Kubus = (req, res) => {
  let sisi = Number(req.body.sisi);
  let luaskubus = 6 * sisi * sisi * sisi;
  let volumekubus = sisi * sisi * sisi;

  let response = {
    luaskubus: luaskubus,
    volumekubus: volumekubus,
  };
  return res.json(response);
};

exports.bangunRuangLimas = (req, res) => {
  let panjanglimas = Number(req.body.panjanglimas);
  let lebarlimas = Number(req.body.lebarlimas);
  let tinggilimas = Number(req.body.tinggilimas);
  let luaslimas =
    2 *
    (panjanglimas * lebarlimas +
      panjanglimas * tinggilimas +
      lebarlimas * tinggilimas);
  let volumelimas = panjanglimas * lebarlimas * tinggilimas;

  let response = {
    luaslimas: luaslimas,
    volumelimas: volumelimas,
  };
  return res.json(response);
};

exports.bangunRuangTabung = (req, res) => {
  let jarijaritabung = Number(req.body.jarijaritabung);
  let tinggitabung = Number(req.body.tinggitabung);
  let luastabung =
    ((2 * 22) / 7) * jarijaritabung * (jarijaritabung + tinggitabung);
  let volumetabung = (22 / 7) * jarijaritabung * jarijaritabung * tinggitabung;

  let response = {
    luastabung: luastabung,
    volumetabung: volumetabung,
  };
  return res.json(response);
};

exports.bangunRuangBola = (req, res) => {
  let jarijaribola = Number(req.body.jarijaribola);
  let luasbola = ((4 * 22) / 7) * jarijaribola * jarijaribola;
  let volumebola =
    (((4 / 3) * 22) / 7) * jarijaribola * jarijaribola * jarijaribola;

  let response = {
    luasbola: luasbola,
    volumebola: volumebola,
  };
  return res.json(response);
};

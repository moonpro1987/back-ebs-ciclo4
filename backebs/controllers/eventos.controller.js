const Evento = require("../models/eventos.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let evento = new Evento({
    nomEvento: req.body.nomEvento,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    hora: req.body.hora,
    numAsistentes: req.body.numAsistentes,    
  });

  evento.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el evento");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El evento se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Evento.find(function (err, eventos) {
    res.json(eventos);
  });
};

exports.findOne = function (req, res) {
  Evento.findOne({ _id: req.params.id }, function (err, evento) {
    res.json(evento);
  });
};

exports.update = function (req, res) {
  let evento = {
    nomEvento: req.body.nomEvento,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    hora: req.body.hora,
    numAsistentes: req.body.numAsistentes, 
  };

  Evento.findByIdAndUpdate(req.params.id, { $set: evento }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el evento");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El evento modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Evento.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el evento");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El evento eliminado correctamente");
    res.json(response);
  });
};

const Eventos = require("../models/eventos.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let eventos = new Evento({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    hora: req.body.hora,
    NumAsistentes: req.body.asistentes,
    
  });

  eventos.save(function (err) {
    if (err) {
      console.log(false);
      (response.exito = false),
        (response.msg = "Error al guardar el evento"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El evento se ha creado satisfactoriamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Eventos.find(function (err, eventos) {
    res.json(eventos);
  });
};

exports.findOne = function (req, res) {
  Evento.findOne({ _id: req.params.id }, function (err, evento) {
    res.json(evento);
  });
};

exports.update = function (req, res) {
  let eventos = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    hora: req.body.hora,
    NumAsistentes: req.body.asistentes,
  };

  Eventos.findByIdAndUpdate(req.params.id, { $set: eventos }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el evento"),
        res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "El evento se modificó correctamente";
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Eventos.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el evento"),
        res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "El evento se eliminó correctamente";
    res.json(response);
  });
};

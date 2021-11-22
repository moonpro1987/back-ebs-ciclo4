const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    max: 60,
  },
  descripcion: {
    type: String,
    required: true,
    max: 40,
  },
  fecha: {
    type: String,
    required: true,
    max: 15,
  },
  hora: {
    type: String,
    required: true,
    max: 15,
  },
  NumAsistentes: {
    type: String,
    required: false,
    max: 5,
  },
});

module.exports = mongoose.model("eventos",EventosSchema);

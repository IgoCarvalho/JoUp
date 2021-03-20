const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    titulo: {
      type: String,
      required: true,
    },
    detalhes: {
      type: String,
      required: true,
    },
    requisitos: {
      type: String,
      required: true,
    },
    perguntas: {
      type: String,
      required: true,
    },
    faixa_de_preco: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    faixa_de_tempo: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    filtros: {
      type: [String],
      required: false,
    },
    referencias: [{
      nome: {type: String, require: true},
      link: {type: String, require: true},
    }],
  },
  { timestamps: true }
);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;

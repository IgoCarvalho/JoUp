const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
    solicitacao: {
      type: Schema.Types.ObjectId,
      ref: 'Solicitacao',
    },
    titulo: {
      type: String,
      required: true,
    },
    dados_cliente: {
      nome:  {type: String, required: true},
      email: {type: String, required: true},
      telefone: {type: String, required: true},
    },
    referencias_cliente: [{
      link: {type: String, require: true},
    }],
    respostas_cliente: {
      type: String,
      required: true,
    },
    contrato: [{
      link: {type: String, require: true},
    }],
    fases_projeto: [{
      titulo: {type: String, required: true},
      descricao: {type: String, required: true},
      data_inicio: {type: Date, required: true},
      data_fim: {type: Date, required: true},
      completo: {type: Boolean, default: false},
    }],
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
    referencias_designer: [{
      nome: {type: String, require: true},
      link: {type: String, require: true},
    }],
    finalizado: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;

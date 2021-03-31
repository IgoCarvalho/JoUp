const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SolicitacaoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
    dados_cliente: {
      nome:  {type: String, required: true},
      email: {type: String, required: true},
      telefone: {type: String, required: true},
    },
    referencias_cliente: [{
      nome: {type: String, require: true},
      link: {type: String, require: true},
    }],
    respostas_cliente: {
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
    solicitado: {
      inicio: {type: Date, require: true},
      prazo: {type: Date, require: true},
    },
    aceito: {
      type: Boolean,
      required: false
    },
  },
  { timestamps: true }
);

const Solicitacao = mongoose.model('Solicitacao', SolicitacaoSchema);

module.exports = Solicitacao;

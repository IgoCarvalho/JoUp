const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    avatar_url: {
      type: String,
      required: false,
    },
    plan: {
      signatureDate: { type: Date },
      key: { type: String, enum: ['premium', 'complete', 'basic', 'free'] },
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
      },
    ],
    socialMediaData: {
      behance: { type: Map, required: false },
      linkedin: { type: Map, required: false },
    },
    creditCard: {
      titular: { type: String, required: false },
      cpf: { type: String, required: false },
      numCartao: { type: String, required: false },
      dataValidade: { type: String, required: false },
      cvv: { type: String, required: false },
      formaPagamento: { type: String, required: false },
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

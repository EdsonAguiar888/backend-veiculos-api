const mongoose = require("mongoose");

const veiculoSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    marca: {
      type: String,
      required: true,
      unique: true
    },
    ano: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Marca", veiculoSchema);

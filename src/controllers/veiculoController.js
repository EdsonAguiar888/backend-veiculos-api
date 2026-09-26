const Veiculo = require("../models/Veiculo");
const veiculo = require("../models/Veiculo");

async function listarVeiculos(req, res) {
  try {
    const veiculos = await Veiculo.find();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarVeiculo(req, res) {
  try {
    const veiculo  = await Veiculo.findById(req.params.id);

    if (!veiculo) {
      return res.status(404).json({ mensagem: "Veiculo não encontrado" });
    }

    res.json(veiculo);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarVeiculo(req, res) {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarVeiculo(req, res) {
  try {
    const veiculo = await Veiculo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!veiculo) {
      return res.status(404).json({ mensagem: "Veiculo não encontrado" });
    }

    res.json(veiculo);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirVeiculo(req, res) {
  try {
    const veiculo = await Veiculo.findByIdAndDelete(req.params.id);

    if (!veiculo) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  excluirVeiculo
};

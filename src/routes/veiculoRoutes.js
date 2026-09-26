const express = require("express");
const veiculoController = require("../controllers/veiculoController");

const router = express.Router();

router.get("/", veiculoController.listarVeiculos);
router.get("/:id", veiculoController.buscarVeiculo);
router.post("/", veiculoController.criarVeiculo);
router.put("/:id", veiculoController.atualizarVeiculo);
router.delete("/:id", veiculoController.excluirVeiculo);

module.exports = router;

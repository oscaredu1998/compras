const express = require("express");

const router = express.Router();

const FedexModel = require('../models/fedex');
const fedexModel = new FedexModel();
const CorreosEcuadorModel = require('../models/correosEcuador');
const correosEcuadorModel = new CorreosEcuadorModel();
const ServientregaModel = require('../models/servientrega');
const servientregaModel = new ServientregaModel();

class Empresas {
  constructor() {
    this.fedexModel = fedexModel;
    this.correosEcuadorModel = correosEcuadorModel;
    this.servientregaModel = servientregaModel;
  };

  setEmpresaFedex() {
    return this.fedexModel;
  }

  setEmpresaCorreosEcuador() {
    return this.correosEcuadorModel;
  }

  setEmpresaServientrega() {
    return this.servientregaModel;
  }
}

router.get("/fedex", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.setEmpresaFedex().data());
});

router.get("/correos-ecuador", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.setEmpresaCorreosEcuador().data());
});

router.get("/servientrega", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.setEmpresaServientrega().data());
});

module.exports = router;

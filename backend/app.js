const express = require('express');

const app = express();
const PORT = 5000;
const empresas = require("./rutas/empresas");

app.use("/api", empresas);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

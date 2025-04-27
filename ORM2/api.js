const express = require("express");
const { sincronizarBanco } = require("./sync");
const { criarUsuarios } = require("./create");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({
    mensagem: "Ola mundo",
  });
});

app.post("/usuarios", (request, response) => {
  criarUsuarios(
     request.body.nome,
     request.body.email,
     request.body.idade
    ).then(() =>{
      response.status(200).json({
        mensagem: "Ola mundo",
      });
    }).catch(() =>{
      response.status(500).json({
        error
      })
    })
});

sincronizarBanco().then(() => {
  app.listen(3000, () => {
    console.log("Aplicação Rodando");
  });
});

const objeto = {
  nome: "Lucas",
  idade: "21",
  cidade: "Fortaleza",
  programador: false,
  hobbies: ["academia","video gamer"],
}

// Transforma objeto em JSON
console.log(JSON.stringify(objeto))

const jsonString = `{
  "nome": "Lucas",
  "idade": "21",
  "cidade": "Fortaleza",
  "programado": false,
  "hobbies": ["academia","video gamer"],
  "endereco": {
    "rua": "rua06",
    "bairro": "AltoAlegre"
  }
}`

// Converte JSON para OBJETO
const objetoConvertido = JSON.parse
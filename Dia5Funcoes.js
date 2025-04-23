// Função

function darBoaTarde(nome) {
  console.log(`Boa tarde, ${nome}`)
}

darBoaTarde("Lucas")

function somar(numeroA, numeroB) {
  return numeroA + numeroB
}


function calculadora(a,b,operacao) {
  switch (operacao) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/": 
      return a / b 
    default:
      console.log("Operação invalida")
      break;
  }
}

let resultado = calculadora(10,2,"-")
console.log(resultado)


const dividir = (a, b) => a / b;

console.log(dividir(10, 2));  // Saída: 5


function somar(a = 0, b = 0) {
  return a + b;
}

console.log(somar(5));  // Saída: 5 (b = 0 por padrão)
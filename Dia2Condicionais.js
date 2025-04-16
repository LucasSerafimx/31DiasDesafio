// CONDICIONAS



let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}

let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com A! 🏆");
} else if (nota >= 70) {
  console.log("Aprovado com B.");
} else {
  console.log("Reprovado. 😔");
}

let diaDaSemana = 7;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira")
    break;
  case 2:
    console.log("Terça-feira")
    break;
  case 3:
    console.log("Quarta-feira")
    break;
  case 4:
    console.log("Quinta-feira")
    break;
  case 5:
    console.log("Sexta-feira")
    break;
  default:
    console.log("Dia invalido")
    break;
}



// 1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.

let hora = 10;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}

// 2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = 2;

switch (mes) {
  case 1:
    console.log("Janeiro")
    break;
  case 2:
    console.log("Fevereiro")
    break;
  case 3:
    console.log("Março")
    break;

  default:
    console.log("Escolha de 1 a 3")
    break;
}


// 3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 17;

if (idade >= 18) {
  console.log("Pode dirigir")
} else if(idade < 18){
  console.log("Não Pode dirigir")
}

// 5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".



// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

let caixa = 4;

switch (caixa) {
  case 1:
    console.log("Sacar")
    break;
  case 2:
    console.log("Depositar")
    break;
  case 3:
    console.log("Saldo")
    break;

  default:
    console.log("Opção indisponivel")
    break;
}
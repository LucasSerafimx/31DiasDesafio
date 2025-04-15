// Formas de declarar

// Declarando uma variável com let
let nome = "João"; // Você pode mudar o valor depois

// Declarando uma variável com const
const idade1 = 25; // O valor não pode ser alterado

// Declarando uma variável com var (não recomendado, mas funciona)
var cidade = "São Paulo";

nome = "Silva";

console.log(nome);

//  Tipos

// String
let estado = "Ceara";

// Number
let idade = 21;

// Boolean
let maiorDeIdade = true;

// Array
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Funciona
console.log(frutas); // ["Maçã", "Banana", "Laranja"]

// Objeto
let pessoa = {
  nome: "joão",
  cidade: "Fortaleza",
  idade: 21
}

console.log(pessoa);
console.log(pessoa.nome);



//  DESAFIO

// 1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".

let nome01 = "Serafim";
let idade01 = 21;

console.log("meu nome é",nome01, "e tenho",idade01, "anos.")


// 2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let valorProduto = 50;
let valorDesconto = 30;
let resultado = valorProduto - valorDesconto;
console.log(resultado);



// 3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
let comidaFavorita = ["Lasanha","Macarrão","Churrasco"];
console.log(comidaFavorita[1]);

// 4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
let livro = {
  titulo: "Terror",
  autor: "Serafim",
  ano: "2025"
}
console.log(livro.titulo,livro.autor)


// 5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".
let estaLogado = false;
estaLogado = true;
console.log("Status de login:",estaLogado)


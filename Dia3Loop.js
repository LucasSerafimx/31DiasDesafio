// LOOPS

for (let index = 0; index <= 20; index++) {
  console.log("Numero", index)  
}

// WHILE -> ENQUANTO

let contador = 0;

while (contador < 10) {
  console.log("contador", contador)  
  contador++
}

for (let i = 0; i < 10; i++){
  if(i == 5) {
    break
  }
  console.log(i)
}

let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Saída:
// Maçã
// Banana
// Laranja

let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} encontrado na posição ${i}!`);
    break;
  }
}
// Saída: Número 12 encontrado na posição 2!

let i = 0;
while (true) {
  console.log(i);
  i++;
  if (i === 5) break; // Evita loop infinito
}
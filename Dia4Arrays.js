//  Arrays

let frutas = ["Fruta1","Fruta2","Fruta3"]

console.log(frutas[0])
console.log(frutas)

// Adiciona um novo elementro pro array
frutas.push("Fruta04")
console.log(frutas)


// Remove o ultimo do arrays
frutas.pop()
console.log(frutas)

// Remove o primeiro do arrays
frutas.shift()
console.log(frutas)


for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  console.log(`Minha fruta preferida é ${element}`)
}


// push()
// Adiciona um elemento ao final
// frutas.push("Uva")
// ["Maçã", "Banana", "Uva"]

// pop()
// Remove o último elemento
// frutas.pop()
// ["Maçã", "Banana"]

// shift()
// Remove o primeiro elemento
// frutas.shift()
// ["Banana", "Laranja"]

// unshift()
// Adiciona um elemento no início
// frutas.unshift("Morango")
// ["Morango", "Maçã"]

// length
// Retorna o tamanho do array
// frutas.length
// 3

// indexOf()
// Retorna o índice de um valor
// frutas.indexOf("Banana")
// 1

// splice()
// Adiciona/Remove elementos
// frutas.splice(1, 1, "Uva")
// ["Maçã", "Uva", "Laranja"]


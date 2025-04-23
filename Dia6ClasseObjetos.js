class Carro {
  constructor(marca,modelo,cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
  }

  acelerar(){
    console.log(`${this.modelo} - ${this.marca} esta acelerando`)
  }
}


const carro1 = new Carro("Toyota","Corolla","Branco")
console.log(carro1)
carro1.acelerar()

const carro2 = new Carro("Honda","Civic","Preto")
console.log(carro2)
console.log(carro2.marca)
carro2.acelerar()


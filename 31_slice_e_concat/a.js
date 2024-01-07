// metodos para operar arrays

// o metodo slice (não é o splice) tambem da para operar em arrays
// neste caso, podemos usar para criar novos arrays apartir de partes de outro array

console.clear()

let nomes = ['joao', 'ana', 'carlos', 'pedro']

//  criar um novo array apartir do inicial entre o indice 1 (inclusive) e o 3 (exclusive)
let nomes_extraidos = nomes.slice(1,3)

console.log(nomes)
console.log(nomes_extraidos)
// metodos para operar arrays

// o metodo slice (não é o splice) tambem da para operar em arrays
// neste caso, podemos usar para criar novos arrays apartir de partes de outro array

console.clear()

let nomes = ['joao', 'ana', 'carlos', 'pedro', 'vaneilza', 'pamela', 'cristina', 'luciana', 'bruna']

//  criar um novo arrays um ate a metade outro da metade até o fim.
let nomes_1 = nomes.slice(0,nomes.length/2);
let nomes_2 = nomes.slice(-(nomes.length/2+1))

console.log(nomes_1)
console.log(nomes_2)
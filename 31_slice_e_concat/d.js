// metodos para operar arrays

// o metodo slice (não é o splice) tambem da para operar em arrays
// neste caso, podemos usar para criar novos arrays apartir de partes de outro array

console.clear()

let nomes = ['joao', 'ana', 'carlos', 'pedro', 'vaneilza', 'pamela', 'cristina', 'luciana', 'bruna']

//  copiar um array tem o problema de ser uma copia por referencia

// let novos_nomes = nomes;
// novos_nomes[1] = "diana";

// console.log(nomes)
// console.log(novos_nomes)

// podemos usar o slice sem qualquer argumento para fazer uma copia para um novo array

let novos_nomes = nomes.slice();
novos_nomes[1] = 'amanda';
console.log(nomes);
console.log(novos_nomes);
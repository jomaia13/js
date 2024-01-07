/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

/* 
duas das extruturas mais usadas no javascript são os arrays e os objetos.
A desestruturação (destructuring) é uma declaração especial da sintaxe que permite
transformar elementos de um array ou propriedades de um objeto em variaveis separadas
*/

// arrays

let nomes = ['ana', 'maria', 'patricia'];
let [nome1, nome2, nome3] = nomes

console.log(nome1)
console.log(nome2)
console.log(nome3)

// e podemos usar a mesma sintaxe com metodos que retornam arrays.
// por exemplo o metodo split de uma string

let nome_completo = 'jo maia';
let [nome, apelido] = nome_completo.split(' ')

console.log(nome, apelido)

// IMPORTANTE: os valores do array e da string permanecem inalterados
// apenas são criadas novas variaveis

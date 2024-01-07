/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// arrays
/* 
string, number, boolean etc, permitem guardar um unico valor.
objetos permitem guardar uma estrutura de valores com determinada chave como nome das propriedades 
arrays sao coleções de valores organizados por uma determinada ordem
*/

// let nomes = new array();
// let nomes = []

let nomes = ['joão', 'maria', 'carlos'];

// para apresentar um valor do array, apresentamos seu indice 
console.log(nomes[2]) 

// podemos alterar o valor de um array recorrendo ao indice
nomes[1] = 'josinaldo';
console.table(nomes)

t('obtendo a quantidade do array')
// para sabermos o total de valores de um array, usamos a propriedade length
console.log(nomes.length)

t('array de tipos variados')
// um array pode conter elementos com qualquer tipo de valor
let dados = [
    'joão',
    100,
    true,
    10.50
];
console.log(dados)

t('usando objetos dentro do array')
// pode até conter uma coleção de objetos
let clientes = [
    {nome: 'joão', idade: 48},
    {nome: 'ana', idade: 25},
    {nome: 'carlos', idade: 30}
]
// se eu quiser apresentar os dados de um cliente
console.log(clientes[1].nome)

t('usando forEach')
// se eu quiser iterar por todos os elementos do array
clientes.forEach(cliente => {
    console.log(`o cliente ${cliente.nome} tem ${cliente.idade} anos`)
});

// ou
t('usando for normal')
for (let i = 0; i < clientes.length; i++){
    console.log(`o cliente ${clientes[i].nome} tem ${clientes[i].idade} anos`)
}
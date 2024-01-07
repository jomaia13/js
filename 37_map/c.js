/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')
// Quando criamos um map, podemos passar um conjunto de chaves e valores no construtor do Map.

let valores1 = new Map([
    ['nome', 'cristina'],
    ['idade', 35],
]);


console.table(valores1)

t('passando objeto para o Map');
// Se tivermos um objeto e quisermos passar para um map, podemos fazer da seguinte forma:

let nomeObjeto = {
    nome: 'cristina',
    apelido: 'cris',
    idade: 35
};

let valores2 = new Map(Object.entries(nomeObjeto));
console.table(valores2.get('apelido'));
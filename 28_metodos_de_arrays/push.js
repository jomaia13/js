/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// adiciona um valor do final do array
let nomes = ['vaneilza', 'cristina', 'bruna'];
console.log(nomes);

t('adicionando nome no fim do array com push')
nomes.push('pamela');
console.log(nomes)
/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// unshift - adiciona um valor no inicio do array
let nomes = ['vaneilza', 'cristina']
nomes.unshift('bruna')
console.log(nomes)
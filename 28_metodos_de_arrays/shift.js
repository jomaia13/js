/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// shift retira um valor do inicio do array
let nomes = ['cristina', 'vaneilza', 'pamela'];
nomes.shift()
console.log(nomes)

t('nome retirado e colocado em variavel')
let nome_retirado = nomes.shift()
console.log(nomes)
console.log(nome_retirado)
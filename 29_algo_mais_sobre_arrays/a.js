/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// alguns aspectos adicionais sobre os arrays
// os arrays são copiados por referencias

let nomes = ['pica pau', 'petterpan', 'as tartarugas'];
let outros_nomes = nomes // copia por referencia

outros_nomes[1] = 'tunderkat'
console.log(outros_nomes,'\n', nomes)
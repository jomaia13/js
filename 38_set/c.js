/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// os metodos keys, values e entries tambem estão disponiveis no set

let nomes = new Set(['cristina', 'vaneilza', 'bruna']);

// key
t('buscando chave')
for(let chave of nomes.keys()){
    console.log(chave)
}

// values
t('buscando valores')
for(let valor of nomes.values()){
    console.log(valor)
}

// entries
t('buscando chave e valor')
for(let entrada of nomes.entries() ){
    console.log(entrada)
}
/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// e se tivermos um objeto mais complexo, mas queremos retirar so uma parte?

let empresa = {
    nome: 'microsofte',
    area: 'software',
    produtos: [
        'windows 11',
        'office',
        'azure',
        'minicreft'
    ]
};

let {nome} = empresa;
let {produtos} = empresa

console.log(nome);
console.log(produtos)
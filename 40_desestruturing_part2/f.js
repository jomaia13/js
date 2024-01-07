/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// podemos ainda usar o rest (...) na desestruturação de objetos

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

let {nome, ...outras_propriedades} = empresa;

console.log(nome);
console.log(outras_propriedades)

// existe ainda mais detalhes mais complexos sobre desestruturação
// mas esses apresentados são os mais utilizados
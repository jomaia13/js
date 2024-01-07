/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// tambem é possivel definir valores padrão para as propriedades inexistentes

let cliente = {
    nome: 'josinaldo',
    apelido: 'jó',
    idade: 44,
    profissao: 'programador'
};

let { nome, apelido, idade, profissao = 'indefinido'} = cliente

console.log(nome);
console.log(apelido);
console.log(idade);
console.log(profissao)

t('alterando a ordem das propriedades')

// ou ainda para alteração da ordem das propriedades.

let fornecedor = {
    marca: 'microsoft',
    produto: 'windows 11'
};

let {area = 'software', produto: software = 'windows', marca: empresa = 'indefinido' } = fornecedor

console.log(area)
console.log(software)
console.log(empresa)
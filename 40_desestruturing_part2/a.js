/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// tambem podemos desestruturar objetos, no entanto a sintaxe é ligeiramente diferente.

let cliente = {
    nome: 'josinaldo',
    email: 'jomaia@gmail.com',
    telefone: 8958,
};
let {nome, email, telefone} = cliente
// console.log(cliente)
console.log(nome);
console.log(email);
console.log(telefone);

/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// reparem que a ordem das propriedades nao importa.
// podemos alterar a ordem da desestruturação, mantendo o nome das variáveis
// igual o nome das chaves das propriedades.

let cliente = {
    nome: 'joao',
    email: 'email@exemplo.com',
    telefone: 7499998989,
}

let { email, telefone, nome } = cliente;

console.log(nome)
console.log(email)
console.log(telefone)
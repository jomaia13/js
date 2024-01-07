/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// tambem podemos alterar o nome das variáveis de saida definindu um alias na desestruturação

let cliente = {
    nome: 'joAraujo',
    email: 'jomaia@gmail.com',
    telefone: 74899889
}

let {nome: nome_completo, email: endereco_email, telefone: celular} = cliente;

console.log(nome_completo)
console.log(endereco_email)
console.log(celular)

// esta regra tambem vale para alteração da ordem das variaveis.
let fornecedor = {
    nome_da_marca: 'microsoft',
    produto: 'windows 11',
    categoria: 'sistema operacional'
}

let {categoria: area, produto: software, nome_da_marca: marca} = fornecedor;

console.log(area)
console.log(software)
console.log(marca)
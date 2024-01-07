// como efetuar uma pesquisa num array

console.clear()

// tambem está disponivel o metodo findIndex que funciona como o find, mas retorna apenas o indice
// e nao o objeto em concreto

const clientes = [
    {nome: 'cristina', idade: 35},
    {nome: 'bruna', idade: 35},
    {nome: 'pamela', idade: 28},
    {nome: 'vaneilza', idade: 44},
    {nome: 'luciana', idade: 46},
];

console.log(clientes.findIndex(cliente => cliente.idade == 28))
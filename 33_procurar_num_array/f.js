// como efetuar uma pesquisa num array

console.clear()

// e se existir mais de um resultado?
// o metodo find e findIndex devolve apenas o primeiro match
// vamos utilizar o metodo filter

const clientes = [
    {nome: 'cristina', idade: 35},
    {nome: 'bruna', idade: 35},
    {nome: 'pamela', idade: 28},
    {nome: 'vaneilza', idade: 44},
    {nome: 'luciana', idade: 46},
    {nome: 'bruna', idade: 15}
];

console.log(clientes.filter(cliente => cliente.idade > 30))
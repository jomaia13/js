// podemos usar o map para alterar os valores do proprio array
let nomes = ['vaneilza', 'cristina', 'bruna', 'pamela', 'luciana', 'clesia'];

console.table(nomes.map(nome => {
    return `olá ${nome}`;
}))
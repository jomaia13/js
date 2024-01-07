// como efetuar uma pesquisa num array

console.clear()

//  os metodos anteriores funcionam com perfeição para arrays de valores.
//  E se quisermos fazer uma pesquisa num array de objetos?

const clientes = [
    {nome: 'cristina', idade: 35},
    {nome: 'vaneilza', idade: 44},
    {nome: 'bruna', idade: 34},
    {nome: 'pamela', idade: 36},
    {nome: 'luciana', idade: 45}
]

// neste caso podemos usar o metodo find
// funciona nos bastidores como um ciclo que procura a primeira ocorrencia pretendida
// se for encotrada devolve o objeto

let cliente = clientes.find(cli => cli.nome == 'bruna');

console.log(cliente)

console.clear();

const cliente = {
    nome: 'joao',
    sobrenome: 'ribeiro',
    telefone: 7456589,
};
// verificar se existe uma determinada propriedade no objeto

// console.log('telefone' in cliente); // resultado false

// console.log(cliente.telefone) // resultado undefined

// if ('telefone' in cliente){
//     console.log(cliente.telefone);
// }else{
//     console.log('telefone nao existe em cliente')
// }

// outra questao é sabermos quais propriedades existem dentro do objeto

for(key in cliente) console.log(key) // mostra a chave
for(key in cliente) console.log(cliente[key]) // mostra os valores das chaves



// for (let i = 0; i < length(cliente); i++) {
//     console.log(i)
// }
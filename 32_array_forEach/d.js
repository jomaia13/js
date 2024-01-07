// como fazer uma iteração(ciclo, laço) em um array
console.clear()

let nomes = ['jo maia', 'diana', 'vaneilza', 'pamela', 'cristina', 'luciana', 'bruna'];

// e podemos ainda ter um terceiro parametro que informa qual é o array que está
// a ser objeto da interação
nomes.forEach(function (nome, index, colecao) {
    console.log(`o inicio é ${index} e o valor é ${nome}, A coleção é ${colecao}`)
})
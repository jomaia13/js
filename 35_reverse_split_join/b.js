// vamos ver mais alguns metodos para tratamento de arrays
// reverse split e join

console.clear()

// o metodo split, nao é um metodo de um array, mas o resultado da sua utilização é a criação de um array
// vamos imaginar que alguem indicou um conjunto de endereço de email separado por virgula.
// como podemos obter uma coleção dos endereços?

let enderecos = "vaneilza@gostoza.com, cristina@gostoza.com, pamela@excitante.com";
let colecao = enderecos.split(',')
console.table(colecao)

let colecao_1 = enderecos.split(' , ')
console.table(colecao_1)

console.log('-'.repeat(50))

// mas vamos imaginar que em alguns casos a virgula foi colocada sem espaços e outro com espaço
// entao vamos ter que recorrer a utilização de mais metodos 

let enderecos1 = "cristina@gmail.com,pamela@gmail.com, vaneilza@gmail.com , bruna@gmail.com"

let colecao2 = enderecos1.split(',').map(e => {
    return e.trim()
})
console.table(colecao2)
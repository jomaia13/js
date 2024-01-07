// como fazer uma iteração(ciclo, laço) em um array
console.clear()

let nomes = ['jo maia', 'diana', 'vaneilza', 'pamela', 'cristina', 'luciana', 'bruna'];

// com as formas mais modernas de escrita de funções podemos ter o seguinte

nomes.forEach((nome, indice)=> console.log(`${indice + 1}º - o nome é ${nome}`))

// nomes.forEach(function (nome, index) {
//     console.log(`o inicio é ${index} e o valor é ${nome}`)
// })
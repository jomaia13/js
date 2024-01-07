// vamos concluir essa longa jornada atravez dos metodos de array
// imagina que tens uma array de valores numericos e pretendes calcular
// o total de todos os valores do array
// (vou usar uma colecao de valores faceis de calcular): total é 150

console.clear()

let valores = [10, 20, 30, 40, 50];

// poderiamos usar um ciclo de seguinte forma
let total = 0;
valores.forEach((e) => { total += e })
console.log(total)

console.log('-'.repeat(50))

// mas vamos usar o metodo reduce
console.log(valores.reduce((somatorio, atual) => somatorio + atual))

// o que acontece na superficie desse metodo?
// a funçao dentro do metodo é aplicado a todos os elementos do array de forma sequencial.
// o resultado da execução do codigo dessa funçao é transportada para o ciclo seguinte.
// dessa forma somatorio vai sempre ter o valo da anterior execução.
// o primeiro argumento é o acumulador e o segundo argumento é o valor atual do ciclo.


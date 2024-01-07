// mais metodos para operar arrays

/**
 * ja vimos  varios metodos para operar arrays
 * vamos avançar mais um pouco
 * existe um metodo chamado splice que é uma caixa de ferramentas para gerir um array
 * vamos ver esse metod em varias açoes 
 */
console.clear()

let nomes = ["joao", "ana", "carlos", "Antonio"];

// como remover elemento do array?
//  os arrays sao objetos na sua essencia portanto podemos testar o delete

console.log(nomes)
delete nomes[2]
console.log(nomes)

// como podemos ver o elemento foi de fato removido mas continua la seu espaço na memoria.
// o array continua com 4 elementos

console.log(nomes.length);

nomes.splice(2, 1)
console.log(nomes)
console.log(nomes.length);

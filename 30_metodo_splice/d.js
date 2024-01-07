//  mais metodos para operar array
console.clear()

let nomes = ["joao", "ana", "carlos", "Antonio"]

console.log(nomes)
console.log(nomes.length)

// os elementos eliminados pelo splice sao devolvidos em forma de outro array
// então ...

let nomes_removidos = nomes.splice(2)

console.log(nomes);
console.log(nomes_removidos)
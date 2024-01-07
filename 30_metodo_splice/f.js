//  mais metodos para operar array
console.clear()

let nomes = ["joao", "ana", "carlos", "Antonio"]

console.log(nomes)
console.log(nomes.length)

// substituir um valor por tres outros valores, alterando o array
// então ...
nomes.splice(2, 1, 'Maria', 'Pedro', 'Cristina')
console.log(nomes);
console.log(nomes.length)

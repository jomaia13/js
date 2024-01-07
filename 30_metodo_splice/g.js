//  mais metodos para operar array
console.clear()

let nomes = ["joao", "ana", "carlos", "Antonio"]

console.log(nomes)
console.log(nomes.length)

// adicionando valor sem remover 
// então ...
nomes.splice(2, 0, 'Maria', 'josinaldo', 'maia')
console.log(nomes);

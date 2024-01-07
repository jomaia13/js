// vamos olhar um metodo muito usado nos arrays, o metodo map

console.clear()

let nomes = ['cristina', 'vaneilza', 'bruna', 'pamela', 'clesia'];

// pretendemos ter um novo array com um numero de caracteres de todos os elementos
// da coleção nomes

let tamanhos = nomes.map(nome => nome.length);
console.table(tamanhos)
// vamos ver mais alguns metodos para tratamento de arrays
// reverse split e join

console.clear()

// o metodo join é um metodo do array para fazer o inverso do split
// neste caso permite criar uma string a partir de uma colecao, cujos dados 
// serão "colados" ou separados por uma outra string

// exemplos
let colecao = ['cristina', 'bruna', 'pamela'];
let string1 = colecao.join(''); // todos colados
let string2 = colecao.join(' ; ') // separados por ;
let string3 = colecao.join(' e ') // separados por e

console.table(string1);
console.table(string2)
console.table(string3)

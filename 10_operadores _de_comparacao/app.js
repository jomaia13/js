// operadores de comparação

/*
ja conhecemos operadores de comparação na matematica
maior que, menor que, maior menor ou igial a ... etc

vamos aprender a comparar valores e perceber o seu resultado.
*/

// IMPORTANTE: todas as comparações retorna um booleano
// true - verdadeiro, correto
// false - falso, errado ou incorreto

console.log(10 > 20) // false
console.log(10 < 20) // true
console.log(20 > 20) // false
console.log(20 >= 20) // true
console.log(20 < 20) // false
console.log(20 <= 20) // true

console.log(20 == 20) // true
console.log(10 == 20) // false
console.log(10 != 20) // true
console.log(20 != 20) //false

// comparaçao de strings - comparação de caracteres de forma sequencial
console.log("joao" == "joao") // true
console.log('joao' != 'joao') // false
console.log("ana" == "joao") // false
console.log("ana" != "joao") // true

console.log("joao" > "joao") // false
console.log("joao" >= "joao") // true
console.log("ana" > "joao") // false

/* 
strict equality
A verificação da igualdade de dois valores tem um problema
nao difeencia o 0 do false
*/

0 == false; // true
"" === false; // true

// com o == os operandos são convertidos para numeros.

// strict equality operator === nao faz essa conversão.
0 === false; // false
"" === false; // false

null == undefined // true
null === undefined // false

// noutras comparações (> < >= <=) null = 0 e undefined = NaN
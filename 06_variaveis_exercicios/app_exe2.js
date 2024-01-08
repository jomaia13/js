// declarar uma variavel A igual a 10
// declarar uma variavel B igual a 20
// declarar uma variavel c igual a
// apresentar o valor de c
// trocar o valor de a com b
// apresentar a e b
console.clear()


let a = 10;
let b = 20;
let c = a;
([a, b] = [b, a]) // aqui foi usado a tecnica de desestruturação (desestructuring)

console.log(c)
console.log('a=',a,'b=',b)

// propriedade e metodos de numeros

let numero = 20.52;

// formata um  numero com casas decimais
console.log(numero.toFixed(1))
// o valor nao é alterado
console.log(numero);

// converte uma string 
console.log(numero.toString());

/*  
metodos que podem ser usados com numeros

isFinite()          checks whether a value is a finite number
isInteger()         checks whether a value is an integer
isNaN()             checks whether a value is Number.NaN
isSafeInteger()     checks whether a value is a safe integer
toExponential(x)    converts a number into an exponential notation
toFixed(x)          formats a number wuth x numbers of digits after the decimal point
toLocaleString()    converts a number into a string, based on the locale settings
toPrecision(x)      formats a number to x length
toString()          converts a number to a string
valueOf()           returns the primitive value of a number
*/
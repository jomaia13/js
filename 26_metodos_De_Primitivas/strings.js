// alguns metodos e propriedades de strings
// os metodos retornam sempre um novo valor

let nome = "josinaldo";

// principal propriedade das strings: numero de caracteres
console.log("numero de caractere da string", nome.length);

// metodo para colocar a string um uppercase
console.log(nome.toUpperCase())

// apresentar um caracter dentro da string numa determinada posição
// indice de base zero
console.log(nome.charAt(5))

// juntar strings - dois metodos
let string1 = 'um ';
let string2 = 'dois ';
let string3 = 'tres';
let string_total = string1 + string2 + string3;
console.log(string_total)

let outra_string_total = string1.concat(string2, string3)
console.log(outra_string_total)

// verificar se uma contem outra
console.log(nome.includes('maia'));

// dividir uma string
let frase = "essa frase tem varias palavras"
console.log(frase.split(" "));

/*
LISTA DE METODOS PARA SER USADOS COM STRINGS

charAt()        returns the character at a specified  index (position)
charCodeAt()    returns the Unicode of the character at a specified index
concat()        returns two or more joined strings
endsWith()      returns if a string ands with a spef=cified value
fromCharCode()  returns Unicode values as characters
includes()      returns if a string contains a specified value
indexOf()       returns the index (position) of the first occurrence of a value in a string
lastIndexOf()   returns the index (position) of the last occurrence of a value in a string
localeCompare() compares two strings in the current locale
match()         searches a string for a value, or a regular expression, and returns the match
repeat()        returns a new string with a number of copies of a string
replace()       searches a strings for a value, or a regular expression, and returns a string
search()        seaches a string for a value, or regular expression, and returns the index 
slice()         extracts a part of a string and returns a new string
split()         splits a string into an array of substrings
startsWith()    checks whether a string begins with specified characters
substr()        extracts a number of characters from a string, from a start index(position)
substring()     Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase() returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase() returns a string converted to uppercase letters, using the host's locale
toLowerCase()   returns a string converted to lowercase letters
toString()      returns a string or a string object as a string
toUpperCase()   returns a string converted to uppercase letters
trim()          returns a string with removed whitespaces
valueOf()       return the primitive value of a string or a string object

*/

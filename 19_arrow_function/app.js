// ARROW FUNCTIONS

/* 
Existe uma forma ainda mais simples e curta ao nivel da sintaxe para criar funções, e que
é geralmente mais interesante do que function expression.

são functions designadas por arrow functions
*/

let funcao = (argumento) => expressao;

// Esta assinatura cria uma funcao que aceita argumentos, depois avalia a expressao do lado
// direito e retorna o resultado.

let funcao2 = function (a, b, c) {
    return a + b + c
};

// vejamos um exemplo comcreto:

let adicao = (a, b) => a + b;

// é uma abreviação de:
let adicao2 = function(a,b){
    return a + b;
}

// para iniciar a função
console.log(adicao(20,30))
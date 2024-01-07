/* FUNÇÕES COMO EXPRESSÕES

No javascript (js) as funçoes não sao extruturas magicas, mas um tipo específico de valor.

vejamos a declaração de uma função:
*/

function dizer_ola() {
    console.log('dizer olá');
}

// existe outra forma de declarar uma função

let dizer_olaa = function () {
    console.log('ola')
};


// Essa forma de definir uma função designação do function expression

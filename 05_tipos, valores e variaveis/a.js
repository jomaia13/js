/* 
    Os tipos de valores(dados) que podem ser representados em uma linguagem de programação, são
    conhecidos como tipos. Quando uma linguagem precisa guardar algum desses valores para
    uso futuro, ela usa variáveis, 
    Os tipos em javascript podem ser divididos em duas categorias -
    - tipos primitivos:
        numeros, strings, boolean, null e undefined
        
        - Qualquer valor que nao seja acima citado, é um objeto.
    - tipos de objeto:
        objetos, arrays, funções 

*/
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Testando a função
const testNumber = 1;
if (isPrime(testNumber)) {
    console.log(testNumber + " é primo.");
} else {
    console.log(testNumber + " não é primo.");
}
console.clear()

// // função sem parametro
// function apresentar_mensagem() {
//     console.log('ola mundo')
// }

// apresentar_mensagem()

// // -------------------------------
// // função com parametro
// function apresentar_mensagem(texto){
//     console.log(`a nova mensagem a apresentar é ${texto} `)
// }

// apresentar_mensagem('--- feliz ano novo')


// // ----------------------------------
// // função com varios parametros
// function adicionar_valores(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`)
// }

// adicionar_valores(8, 5);

// // -------------------------------------
// // funcao com varios parametros que retornam um resultado
// function adicionar_valores(a,b){
//     return a + b
// }

// let valor = adicionar_valores(17,50);
// console.log('a soma é '+ valor)


// // -------------------------------------------
// // variaveis locais e externas
// // uma variavel declarada dentro de uma funcao, so existe dentro dessa função
// function executar(){
//     let nome = 'joao';
//     console.log(nome);
// }
// executar()
// console.log(nome);

// // uma variavel externa pode ser usada denro e fora de uma funcao (e pode modificala)
// let nome = 'joao';
// function executar(){
//     console.log(nome);
// }
//  executar();
//  console.log(nome)
    
// // -------------------------------------
// // funcoes com parametros com valores
// function multiplicar(a, b = 5){
//     return a * b
// }

// console.log(multiplicar(8));
// console.log(multiplicar(4, 5));


// ---------------------------------------
// parametros por padrao indefinido
// undefined, || ou nullish
function apresentar_valor(valor) {
    // if(valor === undefined) valor = 100;
    valor = valor || 100;
    console.log(valor);
}
apresentar_valor()

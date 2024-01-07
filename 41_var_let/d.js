/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// com o let nao podemos declarar uma variável mais do que uma vez

// erro:
// let nome = 'joão';
// let nome = 'ana';

// já com o var
var nome = 'joao';
var nome = 'ana';

// outra coisa estranha, podemos definir uma variável sem o termo let, const ou var e depois 
// declarar var, mas nao o let.

mensagem = 'ola';
console.log(mensagem)
// let mensagem // error

/* 
durante os proximos videos vamos conhecer o basico das criaçoes de classes
no javascript. Algo que nao existia nos primordios do javascript, mas que convem percebermos
como funciona, porque é um dos principais pilares de qualquer linguagem de programação moderna.
A playlist dos fundamentos do javascript estará concluida para avançarmos rapidamente para 
exploração do javascript no ambiente web.
*/

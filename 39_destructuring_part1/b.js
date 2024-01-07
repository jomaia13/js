/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

t('desestruturando o array')
// podemos desestruturar ignorando alguns elementos

let nomes = ['joao', 'ana', 'carlos'];
let [nome1,,nome2] = nomes

console.log(nome1)
console.log(nome2)

t('desestruturando a string')
// podemos desestruturar todas as variaveis iteraveis (map, set etc)
let palavra = 'teste';
let [letra1, letra2,,letra4] = palavra;
console.log(letra1);
console.log(letra2);
console.log(letra4)

// ou ainda
let valores = new Set(['joao', 'ana', 'carlos']);
let [valor1, valor2, valor3] = valores;

console.log(valor1);
console.log(valor2);
console.log(valor3);

// podemos tambem fazer o seguinte
let usuarios = {};
[usuarios.nome, usuarios.apelido] = 'josinaldo maia'.split(' ');
console.log(usuarios.nome);
console.log(usuarios.apelido)
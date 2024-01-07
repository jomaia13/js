/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// podemos usar desestruturação por exemplo em uma iteração

let cliente = {
    nome:'josinaldo',
    sobrenome: 'maia',
    idade: 44,
};

for(let [key, value] of Object.entries(cliente)){
    console.log(`${key}: ${value}`)
}

// mas podemos fazer muito mais.Por exemplo, podemos trocar os valores de duas variaveis entre si
let valor1 = 1000;
let valor2 = 5000;

[valor1, valor2] = [valor2, valor1]
console.log('valor 1',valor1);
console.log('valor 2',valor2);

// e podemos usar reticencias para definir o termo 'rest' ou 'restante'.
// vejamos:

let [n1, n2] = ['joao', 'carlos', 'antonio', 'ana'];


t('usando reticencias')
// neste caso os valores antonio e ana sao ignorados.
// dizemos que o resto ou restante foi ignorado na desestruturação
// entao podemos fazer o seguinte

let [nn1, nn2, ...nn] = ['joao', 'ana', 'pedro', 'carlos', 'antonio'];

console.log(nn1);
console.log(nn2);
console.log(nn);

t('-')
// e podemos ainda definir valores padrão
let fornecedor = ['apple', 'asus', 'microsoft'];
let [fornecedor1, fornecedor2, fornecedor3 = 'indefinido'] = fornecedor;

console.log(fornecedor1);
console.log(fornecedor2);
console.log(fornecedor3);

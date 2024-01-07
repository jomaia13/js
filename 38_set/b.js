/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// podemos criar tambem esse tipo de coleção com valores que sao objetos

let cristina = { nome: 'cristina', idade: 35, apelido: 'cris' };
let bruna = { nome: 'bruna', idade: 32, apelido: 'bruna' };
let vaneilza = { nome: 'vaneilza', idade: 44, apelido: 'vana' };

let valores = new Set([cristina, bruna, vaneilza]);

console.log(valores);

// iteração com forEach
t('usando forEach')

valores.forEach(valor => {
    console.log(valor)
})
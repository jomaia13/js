/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// se o var for usado dentro de uma função, apenas é global nesta função

function somar(a,b){
    var resultado = a + b;
    console.log(resultado)
}

somar(10,20)
console.log(resultado)
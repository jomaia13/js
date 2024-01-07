/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// o mesmo acontece com os ciclos

for (var a = 0; a <= 5; a++){
    console.log(a)
    var b = 'valor global'
}
console.log(a)
console.log(b)

// ja com o let
for (let c = 0; c <=5; c++){
    console.log(c)
    var d = 'up'
}

console.log(c)
console.log(d)
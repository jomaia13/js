/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// Ao longo desta playlist, ja usamos var let e const para definir variáveis, objetos, array e etc.
// vamos finalmente ver quais sao as diferenças (o escopo) entre o var e o let para finalizarmos 
// essa playlist com a programação orientada a objeto.

// var
/* 
podemos dizer que a utilização de VAR é coisa do passado.
Existe tres formas de declarar variaveis, var let e const.
na sua exencia mais basica let e var são muito semelhantes. Usar uma ou outra pode nao ser diferente.
internamente no entanto, var é bem diferente.
Aparece bem nos scripts antigos, na programação moderna são praticamente inexistentes.
Se encontrares antigos scripts e quiseres criar versoes novas, é importante perceber o var.

o var nao tem escopo de bloco
exemplo:
*/

if (1 == 1) {
    var nome1 = true
}
console.log(nome1)

t('let so existe dentro do if')
// se usarmos let a variavel so vai existir dendo do if
if (1 == 1) {
    let nome2 = true
}
console.log(nome2)

/**
 * Esta funçao ajuda separar o codigo no terminal com console.log
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
function t(t) {

    console.log('-'.repeat(15), `${t}`, '-'.repeat(15));

}
console.clear()

module.exports = t

const t = require('../REVISAO/t')

t('inicio do código')

// remove o ultimo elemento do array
let nomes  = ['cristina', 'pamela', 'vaneilza'];
console.log(nomes)

t('ultimo nome removido com pop()')
nomes.pop()
console.log(nomes)

t('novamente removido e adicionado em uma variavel')
// tambem pode se atribuir a uma variavel o que foi removido do array
let nome_retirado = nomes.pop()
console.log(nomes)
console.log(nome_retirado)
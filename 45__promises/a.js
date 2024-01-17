const t = require('../REVISAO/t')
 
const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3;
    if(soma === 2){
        resolve('tudo certo')
    }else{
        reject('tudo errado')
    }
})

console.log('esperando promise ...')

umaPromessa.then((resultado) => {
    console.log(`valor do then R$ -then ${resultado}`)
}).catch((erro) => {
    console.error(`valor do catch =${erro}`)
}).finally(() => {
    console.log('independentedo resultado, eu estarei aki ')
})


console.log(`isso vai ser logado antes da promise `)
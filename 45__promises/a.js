// promise 

const t = require('../REVISAO/t')

t('iniciando codigo - promises')

const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3
    if (soma === 3) {
        resolve('tudo certo')
    } else {
        reject('deu erro')
    }
})

console.log('esperando uma promise')

// tratando o resultado da promise
umaPromessa.then((resultado) => {
    console.log(`valor do then ${resultado}`)
}).catch((erro) => {
    console.log(`valor do catch ${erro}`)
}).finally(()=>{
    console.log('independente do resultado eu estarei aki')
})

console.log('>>>>> logado antes da promise <<<<<')

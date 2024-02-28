const t = require('../REVISAO/t')
/* 
    closures - é o agrupamento de uma funçao com o seu escopo lexico
    
    em JS existe tres tipos de escopo: escopo de função, escopo de bloco e escopo lexico
    - vamos enteder o que é escopo lexico - escopo é a acessibilidade ou visibilidadde de uma   
      variavel
    - como funcoes retornam valores - 
    - 
*/

// escopo lexico

// let externa = () => {
//     const book = "Sapiens: Uma breve história da humanidade."
//     const internal = () => {
//         console.log(book.toUpperCase())
//     }
//     internal()
// }

// externa()

// const lexical = 'oi lexical'

// const safe = secret => ({
//     getSecret: () => secret    
// })
// const privateUserData = "Dados secretos"
// // atravez de um objeto consigo acessar os dados no modulo, da sintax lexical

// // const obj = safe(privateUserData)
// // console.log(obj.getSecret())

// // outra forma seria 
// const func = secret => () => secret
// console.log(func(privateUserData)())

// const privateUserData2 = "outro Dados secretos"
// const privateUserData3 = "mais um Dados secretos"

// const getSecret2 = func(privateUserData2)
// const getSecret3 = func(privateUserData3)

// console.log(getSecret2())
// console.log(getSecret3())

t('mais exemplos de closures')

const contador = function(num){
  let atual = 1
  let timer = setInterval(() => {
    if(atual === num){
      clearInterval(timer)
    }
    console.log(atual++, num)
  }, 1000)
}
contador(10)

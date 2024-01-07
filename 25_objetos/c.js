// como fazermos se quisermos copiar de fato um objeto (fazer um clone do objeto)
// metodo 1
let user1 = {
    nome: 'joao'
}

let user2 = {}
for(let k in user1){
    user2[k] = user1[k]
}
 
console.log(user1.nome);
console.log(user2.nome);

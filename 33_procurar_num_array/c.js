// como efetuar uma pesquisa num array

console.clear()

let nomes = ['Vaneilza', 'Bruna', 'Pamela','Cristina','Vaneilza'];

// no caso do metodo includes, vamos obter um booleano indicando se o valor existe ou não
// independentimente da quantidade de vezes ou do indice

n = 'Vaneilza'

if (nomes.includes(n)) {    
    console.log(`${n} existe no array ` )
}else{
    console.log(`${n} nao existe no array `)
}

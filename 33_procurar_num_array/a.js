// como efetuar uma pesquisa num array
// vamos ver alguns metodos para pesquisar a existencia ou nao de determinado valor em um array
console.clear()

let nomes = ['Vaneilza', 'Bruna', 'Pamela','Cristina'];

// vamos olhar para  tres metodos: indexof, lastIndexOf, includes

// indexof permite procurar o indice de um elemento a partir de uma posição.
// devolve o valor do indice ou -1 no caso de nao encontrar o valor 

// procurar em todo o array o match
let posicao1 = nomes.indexOf('Vaneilza')
console.log(posicao1)

// procurar no array apartir do indice 1 até o fim
let posicao2 = nomes.indexOf('Cristina',1)
console.log(posicao2)

// no caso de nao existir o valor
let posicao3 = nomes.indexOf('nome_nao_existe');
console.log(posicao3)
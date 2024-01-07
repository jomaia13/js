/*
falamos de arrays nos videos anteriores
tambem ja falamos sobre objetos,

objetos permitem guardar coleções de dados baseados numa key (chave), a chave e os valores 
sao propriedades.

nos arrays podemos guardar coleções ordenadas de dados

Agora vamos ver um outro tipo de coleção: MAP
O Map é uma coleção de itens de dados com chaves
É um pouco como os objetos mas com chaves de qualquer tipo.
*/

t = (t) => {console.log('-'.repeat(15),t,'-'.repeat(15));}

console.clear();
let valores = new Map();
valores.set('clube','flamengo');
valores.set('nome','josinaldo');
valores.set('profissão', 'programador');
valores.set('idade', 44 );
valores.set('')

console.table(valores)

t('buscando um valor com get')
/*
o metodo set permite adicionar uma chave e respectivo valor.
se quisermos ir buscar um determinado valor usaremos o metodo get
*/
console.log(valores.get('nome'));
console.log(valores.get('idade'))

t('consultando se tem uma chave')
// se quisermos perguntar a colecao se tem uma determinada chave;

if(valores.has('nome')){
    console.log('tem um apelido')
}else{
    console.log('nao tem apelido')
}

t('removendo um objeto')

// se quisermos remover o objeto da coleção, usamos o metodo delete

valores.delete('');
console.table(valores)

t('limpando a coleçao com metodo clear')
// se quisermos limpar toda a coleçao, usaremos o metodo clear;

valores.clear()
console.table(valores)

t('contando valores')
// e se quisermos saber quantos elementos tem o map, usamos a propriedade size

console.log(valores.size)
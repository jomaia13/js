/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

/*
set o outro tipo de coleção
tem semelhança com o Map
É especial porque nao tem chaves, apenas valores, e cada valor so pode existir uma vez
*/

let valores = new Set();
valores.add('vaneilza');
valores.add('cristina');
valores.add('bruna');

console.table(valores)                 

// contem os mesmos metodos e propriedades do Map
t('indicativo')
console.log('observe que tem os mesmos metodos do Map')
valores.delete('bruna')
console.table(valores)

t('consulta por um determinado valor')

if(valores.has('bruna')){
    console.log('Sim temos esse valor')
}else{
    console.log('Valor não encontrado')
}

// consultado o tamanho do array
t('tamanho do array')
console.log(valores.size)

// limpando o array
t('array limpo')
valores.clear();
console.table(valores)

/* 
A principal caracteristica desta coleção é que se tentar adicionar um elemento que ja existe
ela nao será possiver ser adicionado.
*/
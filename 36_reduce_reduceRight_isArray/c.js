console.clear();

/**
 * @returns: retorna uma separação de caracteres
 */
t = () => console.log('-'.repeat(50))




// os arrays nao formam um tipo de dado distinto do que vimos nos data types
// os arrays sao baseados em objetos, portanto, se quisermos verificar se uma determinada
// variavel é um array, o uso do typeOf nao é suficiente.

let nomes = ['cristina', 'vaneilza', 'bruna'];

console.log(typeof (nomes));
t()

// podemos verificar se uma variavel é uma rray usando um metodo especifico dos arrays
if (Array.isArray(nomes)) {
    console.log('sim')
} else {
    console.log('não')
};
t()

// conclusao:
/*
> ter em atenção que os metodos sort, reverse e splice transformam o proprio array.
> os metodos que vimos nos videos mais recentes, cobrem a esmagadora da maioria das soluções
< Existem outros métodos que nao vimos: some, every, fill, copywithin, flat, ...
*/





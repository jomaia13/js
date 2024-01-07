console.clear()

/**
 * Existe um segundo argumento designado por initial que pode (e deve) ser adicionado ao reduce
 * neste caso vamos usar o zero para garantir que o calculo do somatorio initial do zero;
 * se quisermos um valor inicial diferente, podemos colocalo neste argumento
 */
let valores = [10, 20, 30, 40, 50];
console.log(valores.reduce((somatorio, atual)=> somatorio + atual, 0), 'usando apenas reduce')

console.log('-'.repeat(50));

// com valores inicial igual a 100
console.log(valores.reduce((somatorio, atual) => somatorio + atual, 100), 'usando apenas reduce com inicial 100')

console.log('-'.repeat(50))

// o metodo reduceRight faz exatamente a mesma coisa mas do final do array para o principio
console.log(valores.reduceRight((somatorio, atual) => somatorio + atual, 100),' usando reduceRight')

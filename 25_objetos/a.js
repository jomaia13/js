// COPIAR OBJETOS

// ao contrario dos tipos primitivos ( strings, number, bool, etc) os objetos sao copiados por referencia

// exemplo com primitivas, variaveis sao copiados por valor
// let nome1 = 'joao';
// let nome2 = nome1;

// console.log(nome1);
// console.log(nome2);
// nome2 = 'ana'
// console.log(nome1);
// console.log(nome2);

// EXEMPLO COM OBJETOS

const client1 = {
    nome: 'joao'
};

const client2 = client1; // objetos sao copiados por referencia

console.log(client1);
console.log(client2);

client1.nome = 'ana'

console.log(client1);
console.log(client2);

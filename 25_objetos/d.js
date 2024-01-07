// metodo 2 - object.assign

let usuario1 = {
    nome: 'marcela'
}

let usuario2 = {}

Object.assign(usuario2, usuario1);
console.log(usuario1.nome);
console.log(usuario2.nome);
usuario2.nome = 'vaneilza';
console.log(usuario1.nome);
console.log(usuario2.nome);

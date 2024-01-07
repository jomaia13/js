let nacionalidade = "brasileiro";

const cliente = {
    nome: 'jo',
    apelido: 'maia',
    'tipo de cliente': 'vip',
    [nacionalidade]: 'brasil '

};

// formas de buscar o nome
console.log(cliente.nome); 
console.log(cliente['apelido']);
console.log(cliente.brasileiro)

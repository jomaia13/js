console.clear()

// literal do objeto

let cliente = {
    nome: 'josinaldo',
    apelido: 'maia',
    telefone: 7499999999,

    nome_completo: function () {
        return this.nome + ' ' + this.apelido
    },

    mudar_nome: function (novo_nome) {
        this.nome = novo_nome
    }
};
console.log(cliente.nome)
console.log(cliente.nome_completo())
cliente.mudar_nome('pablisia');
console.log(cliente.nome_completo())


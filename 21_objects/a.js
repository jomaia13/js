console.clear()
// construtor do objeto
function Pessoa(nm, ap, tlf) {
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nome_completo = function(){
        return this.nome + ' ' + this.apelido;
    }
    this.alterar_nome = function(novo_nome){
        this.nome = novo_nome;
    }
}

let cliente = new Pessoa('josinaldo', 'maia', 'sem telefone');
console.log(cliente.nome_completo())
console.log(cliente.telefone)
cliente.alterar_nome('pablisia')
console.log(cliente.nome_completo())
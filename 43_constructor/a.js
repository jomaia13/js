/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// constructor de uma classe
class Pessoa {
    nome
    idade

    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }

    apresentacao() {
        return `ola, eu sou ${this.nome} e eu tenho ${this.idade} anos de idade!`
    }
}

let eu = new Pessoa('jo',44);
eu.nome = 'josinaldo'
console.log(eu.apresentacao())
/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

class Pessoa {
    nome
    idade

    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
    apresentar_nome(){
        return this.nome
    }
}

let eu = new Pessoa('jo',44);

console.log(eu.apresentar_nome())

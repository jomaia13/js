/**
 * @param: t espera uma string
 * @function: t('string') separador de tarefas com titulo...
 */
t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()
t('inicio do código')

// definicão da classe
class Pessoa {
    // propriedades | fields | campos
    nome
    apelido
    idade

    // metodo
    apresentar() {
        return `ola, meu nome é ${this.nome} e a minha idade é ${this.idade} anos`;
    }
}

let eu = new Pessoa();
let tu = new Pessoa();

eu.nome = 'josinaldo';
eu.apelido = 'jo';
eu.idade = 44;

tu.nome = 'pedro';
tu.apelido = 'peu';
tu.idade = 18


// console.table(eu);
// console.table(tu)

console.log(eu.apresentar())
console.log(tu.apresentar())

// vamos agora entender como agente faz pra herdar, tirar de uma classe e fazer a herança
// pegar dados de uma classe e usar em outra classe

// vou criar uma classe dev, ela vai ter alguns atributos, que mostra que essa pessoa é um dev mesmo

class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev) {
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDeDev = tipoDeDev
    }

    saudacao() {
        console.log(`ola, sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`)
    }
}

class frontEnd extends Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev, framework) {
        super(nome, idade, principalLinguagem, tipoDeDev);

        this.framework = framework
    }

}

class beckEnd extends Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev, bancoDeDados) {
        super(nome, idade, principalLinguagem, tipoDeDev);

        this.bancoDeDados = bancoDeDados;
    }
}

const frontEnd1 = new frontEnd("josinaldo", 45, "javascript", "frontEnd", "react")
const beckEnd1 = new beckEnd("cristina", 35, "c#", "BackEnd", "sqlserver")

console.log(frontEnd1);
frontEnd1.saudacao()
console.log(beckEnd1)
beckEnd1.saudacao()
// proximo video prototyps
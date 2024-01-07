// existe outras formas de iteração aos arrays
let nomes = ['carlos', 'ana', 'pedro'];

for(let nome of nomes){
    console.log(nome)
}

// ou nao aconselhavel por razoes tcnicas
for(let key in nomes){
    console.log(nomes[key])
}


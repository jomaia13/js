// como fazer uma iteração(ciclo, laço) em um array
console.clear()

let nomes = ['jo maia', 'diana', 'vaneilza', 'pamela', 'cristina', 'luciana', 'bruna'];

// dentro do ciclo a função pode ainda guardar alguns valores adicionais

nomes.forEach(function (nome, index) {
    console.log(`o inicio é ${index} e o valor é ${nome}`)
})

// vamos ver mais alguns metodos para tratamento de arrays
// reverse split e join

console.clear()

// agora vamos imaginar o caso anterior, mas so queremos os tres peimeiros endereços
// todos os restantes nao interessam
// podemos usar um segundo argumento facultativo do split, que determina quantos resultados 
// pretendemos obter

let enderecos = "vaneilza@gostoza.com, cristina@gostoza.com, pamela@excitante.com, bruna@gmail.com";

let colecao = enderecos.split(',', 3).map((e) => { return e.trim() })

console.table(colecao)
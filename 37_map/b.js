t = (t) => { console.log('-'.repeat(15), t, '-'.repeat(15)); }

console.clear()

// existe tres formas de fazer uma iteração(ciclo,laço) no map

console.clear();
let valores = new Map();
valores.set('clube', 'flamengo');
valores.set('nome', 'josinaldo');
valores.set('profissão', 'programador');
valores.set('idade', 44);
valores.set('')

t('interação(laço) pelo key')
// map.keys()
for(key of valores.keys()){
    console.log(key)
}

t('interação(laço) pelo value')
// map.value()
for(value of valores.values()){
    console.log(value)
}

t('interação(laço) pelo entries(entradas)')
// map.entries()
for(entrie of valores.entries()){
    console.log(entrie)
}

// existe ainda outro metodo que nao é exclusivo do Mat. o forEach
valores.forEach((value, key) => {
    console.log(`A chave é:... ${key}, e o valor é:... ${value}`)
})

// CICLO FOR

// o ciclo for é um dos ciclos mais usados em programação

for (inicil; condicao; step){
    codigo
}

for(let num = 1; num <= 10; num++){
    console.log(num)

}

// podemos ainda escrever da seguinte forma
let numero = 1;
for(;numero <= 10;numero++){
    console.log(numero)
}

// ou ainda assim
let number = 1;
for(;number <= 10;){
    console.log(number++)
}

// intercalando no loop
for(let numero = 1; numero <= 10; numero++){
    if(numero == 5) continue;
    console.log(numero)
}

// saindo fora do loop
for(let n = 1; n <= 10; n++){
    console.log(n);
    if(n > 5) break 
}

// loops aninhados
for(let valor1 = 1; valor1 <= 4;valor1++){
    for(let valor2 =1; valor2 <= 4;valor2++){
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    }
} 

// sair de um loop aninhado com labels
ciclo: for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        if(valor1 * valor2 == 6)break ciclo;
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    }
}
console.log('terminado')

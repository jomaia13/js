ciclo: for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <= 3; valor2++){
        if(valor1 * valor2 == 6)break ciclo;
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    }
}
console.log('terminado')


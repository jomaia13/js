
/*
os ciclos existem nas linguagens de programação para repetirmos a execução de açoes
Por exemplo, se quisermos apresentar um conjunto de 10 operações baseadas no mesmo algoritimo,
não é necessario repetirmos 10 vezes o mesmo codigo.

Se for necessario apresentar a lista de todos os elementos de uma coleçao não será necessario
criar um codigo para cada um deles.
*/

// while

while (condicao) {
    // codigo a executar
}

let numero = 1;
while (numero <= 10) {
    console.log(numero)
    numero++
}

// inverter a apresentação
let numero2 = 10;
while (numero2 >= 1) {
    console.log(numero2)
    numero2--
}

// podemos usar sem chaves se tivermos apenas uma ação
let n = 1;
while (n <= 10) console.log(n++)

// DO WHILE
let num = 1;
do {

    console.log(num);
    num++
} while (num < 10);


let num2 = 1;
do {

    console.log(num2);
    num2++
    if (num2 > 6) break
} while (num2 < 10);
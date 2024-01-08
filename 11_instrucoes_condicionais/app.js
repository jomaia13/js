// instruções condicionais | conditional branching (ramificação)
// if statement e ? operator

// if statement 
/* if (condiçao){
    ... 
}
*/
let valor_a = 10;
let valor_b = 20;

if(valor_a < valor_b){
    console.log("ok !!!")
}

// segunda forma de usar if 
if(valor_a < valor_b) console.log("ok !!!")

// ELSE

if(condicao){
    // se condicao for verdadeira
}else{
    // se condicao for falsa
}

// ELSE IF
if(condicao){
    // se condicao1 for verdadeira
}else if(condicao2){
    // se condicao2 for verdadeira
}else if(condicao3){
    // se condicao3 for verdadeira
}else{
    // se todas as forem falsas
}

// CONDITIONAL OPERATOR

let nome = 'joao';
let verificacao = nome == "joao" ? "sim" : "nao";
console.log("o utilizador está autorizado?" + verificacao);

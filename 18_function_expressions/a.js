console.clear()

function dizer_ola1(){
    console.log('ola 1')
}

let dizer_ola2 = function(){
    console.log('ola 2')
};

dizer_ola1();
dizer_ola2();

let nova_funcao = dizer_ola2

nova_funcao()
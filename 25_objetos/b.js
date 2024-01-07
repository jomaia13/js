// na comparaçao de objetos eles so sao iguais se forem o mesmo objeto

let obj1 = {
    valor: 10
};

let obj2 = {
    valor: 10
};

if (obj1 == obj2){
    console.log('sao iguais')
}else{
    console.log('sao diferentes')
}
// acima eles sao diferentes pois ocupam lugares diferentes na memoria
// ja nao acontece neste novo caso

obj1 = obj2

if(obj1 == obj2){
    console.log('iguais')
}else{
    console.log('diferentes')
}
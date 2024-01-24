const t = require('../REVISAO/t');
t('async_await')

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => reject('promise mil resolvida'), 1000)
})

// 
const resolvedoraDePromiseAsincrona = async () => {
    const resultado1 = await cincoMil().then((res) => {
        console.log(res);
    }).catch((res) => {
        console.log(err);
    });


    const resultado2 = await mil().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });


    console.log(`mensage ${resultado1} ${resultado2}`)
}

resolvedoraDePromiseAsincrona()

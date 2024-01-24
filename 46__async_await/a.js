const t = require('../REVISAO/t');
t('async_await')

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
});

const resolvedoraDePromiseAsincrona = async () => {
    const resultado1 = await cincoMil();


    console.log(`mensage ${resultado1}`)
}

resolvedoraDePromiseAsincrona()

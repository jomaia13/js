// promise.all promise.race
const t = require('../REVISAO/t')

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 1 resolvida'), 1000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 resolvida'), 500)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 3 resolve'), 100)
})

Promise.race([promise1, promise2, promise3]).then((mensages) => {
    console.log(mensages)
})
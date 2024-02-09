const userName = "jomaia";

fetch(`https://api.github.com/${userName}`, {
    method: 'GET',
    headers: {
        Accept: `Application/vnd.github.+json`,
    },
})
    .then((response) => {
        console.table(typeof response)
        console.table(response)
        return response.json()
    })
    .then((data) => {
        console.table(`o nome do usuário é ${data.name}`)
        console.log('dados encontrados')
    })
    .catch((err) => {
        console.log('ouve algun erro', err)
    })

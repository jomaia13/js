const userName = "";

fetch("https://multicanais.lc/ao-vivo/futebol-ao-vivo-online/", {
    method: 'GET',
    headers: {
        Accept: `https://multicanais.lc/ao-vivo/futebol-ao-vivo-online/`,
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`o nome do usuário é ${data.json}`)
        console.log('dados encontrados')
    })
    .catch((err) => {
        console.log('ouve algun erro', err)
    })

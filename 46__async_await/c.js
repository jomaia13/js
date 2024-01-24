const userName = 'jomaia13';

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'Application/vnd.github.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`o nome do usuário é ${data.name} `)
    })
    .catch((err)=>{
        console.log('ouve algun erro',err)
    })

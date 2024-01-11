// HORA DA REVISAO - VAMOS REVER TODO CONTEUDO ESTUDADO E SEMPRE QUE POSSIVEL 
// VAMOS USAR COM EXEMPLOS PRATICOS 

const characters = [
    { name: 'Frodo', race: 'Hobbit' },
    { name: 'Sam', race: 'Hobbit' },
    { name: 'Aragorn', race: 'Man' },
    { name: 'Legolas', race: 'Elf' },
    { name: 'Gimli', race: 'Dwarf' },
    { name: 'Boromir', race: 'Man' },
    { name: 'Merry', race: 'Hobbit' },
    { name: 'Pippin', race: 'Hobbit' },
    { name: 'Gandalf', race: 'Ainur' },
];

// let hobbits = []
// for (key in characters) {
//     if (characters[key].race === 'Hobbit') {
//         hobbits.push(characters[key])
//     }
// }

const hobbits = characters.filter((character)=>{
    return character.race === 'Hobbit'
    
})

console.log(hobbits)
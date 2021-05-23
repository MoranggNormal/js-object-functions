const arr = [
    ['fName', 'Euller'],
    ['sName', 'Peixoto'],
    ['fiName', 'Nekrus'],
    ['seName', 'Leonhart']
]

// [
//     ['a', 1],
//     ['b', 2]
// ]

const fromentries = Object.fromEntries(arr)

console.log(fromentries) // TRANSFORMA UM ARRAY EM UM OBJETO!!! NÃO FUNCIONA COM PROPS IGUAIS.
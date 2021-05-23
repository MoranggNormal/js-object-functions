const data = {
    name: 'Euller',
    last: 'Peixoto',
    age: 19,
}

const own = Object.getOwnPropertyDescriptor(data, 'name')

const ownt = Object.getOwnPropertyDescriptors(data)

const propNames = Object.getOwnPropertyNames(data)

// console.log(own) // MOSTRA PROPS DE UM ESPECIFICO
// console.log(ownt)  // MOSTRA PROPS DE TODOS ITEMS NO OBJETO
// console.log(propNames) // MOSTRA APENAS OS NOMES DAS PROPRIEDADES! MUITO USEFUL!
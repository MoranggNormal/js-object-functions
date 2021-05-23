const data = {
    name: 'Euller',
    age: 19,
    isMale: true
}

const keys = Object.keys(data)
const propNames = Object.getOwnPropertyNames(data)

console.log(keys);
console.log(propNames) // MESMA COISA.
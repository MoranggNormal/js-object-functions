const nome = [  { name: "Euller" },  { name: "Jose" },  { name: "Joao" },  { name: "Jagora" },  { name: "Jatoba" }, { name: "Joaquim" },
];

const map = nome.map(({ name }) => name);
const newName = "Jatoba";
const ok = "Nome válido";
const error = "Esse nome já está sendo utilizado.";

// const verify = () => {
//   if (Object.is(newName, map)) return console.log(error);
//   return console.log(ok);
// };
// verify();
// Isto é uma verificação, se o nome existir no array; retorna error. Aparentemente não funciona, vou usar .Filter()...

const filtr = nome.filter(({name}) => name == newName ) 

// console.log(filtr[0].name)

filtr[0].name === true ? console.log('s') : console.log('n')


// const verify2 = () => {
//     if(filtr[0].name) return console.log(error)
//     return console.log(ok)
// }

// verify2()
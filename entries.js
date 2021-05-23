const obj = {
  fName: "Euller",
  sName: "Peixoto",
  age: 19,
  sex: "male",
};

const arr = [
    {
      fName: "Nekrus",
      sName: "Leonhart",
      age: `${19} (enquanto vivo)`,
      sex: "male",
    },
    {
      fName: "Isabella",
      sName: "Notoria",
      age: "Impossível ser calculada por parâmetros humanos.",
      sex: undefined,
    },
];

const entries = Object.entries(arr);
// console.log(entries)
// console.log(arr.map((e) => e));
// console.log(arr[1].fName)
console.log(
    arr.map(({fName}) => fName )
)
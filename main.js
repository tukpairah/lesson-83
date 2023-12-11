const owner = {
  name: 'Rahat',
  age: 17,
  country: 'Kazakhstan'
}

console.log(owner.name)

const user = {
  Alex: {
    sayHello(name) {
      console.log(`Hello ${name}`)
    }
  }
}
user.Alex.sayHello(`Rayan`)


const usersList = [
  {
    name: "Sam",
    age: 21,
    isAdmin: false,
  },
  {
    name: "Tom",
    age: 27,
    isAdmin: true,
  },
  {
    name: "Jack",
    age: 30,
    isAdmin: false,
  }
]

let users = 0;

for (let i = 0; i < usersList.length; i++) {
  if (!usersList[i].isAdmin) {
    users++;
  }
}
console.log(users);
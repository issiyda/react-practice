let forUsers = [
  {
    name: 'ishida',
    like: 'meat',
    sex: 'male',
  },
  {
    name: 'tanaka',
    like: 'vegetable',
    sex: 'female',
  },
  {
    name: 'suzuki',
    like: 'fish',
    sex: 'female',
  },
  {
    name: 'matsumoto',
    like: 'beans',
    sex: 'male',
  },
];
let newForUsers = [];

for (let index = 0; index < forUsers.length; index++) {
  if (forUsers[index].sex === 'male') {
    newForUsers[index] = { ...forUsers[index], entranceFee: 5000 };
  } else {
    newForUsers[index] = { ...forUsers[index], entranceFee: 1000 };
  }
}

console.log('newForUsers', newForUsers);

let users = [
  {
    name: 'ishida',
    like: 'meat',
    sex: 'male',
  },
  {
    name: 'tanaka',
    like: 'vegetable',
    sex: 'female',
  },
  {
    name: 'suzuki',
    like: 'fish',
    sex: 'female',
  },
  {
    name: 'matsumoto',
    like: 'beans',
    sex: 'male',
  },
];

users = users.map((user) => {
  if (user.sex === 'male') {
    return { ...user, entranceFee: 5000 };
  } else {
    return { ...user, entranceFee: 1000 };
  }
});

console.log('users', users);

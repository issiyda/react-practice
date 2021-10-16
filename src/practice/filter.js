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

const females = users.filter((user, index) => user.sex === 'female');
const males = users.filter((user, index) => user.sex === 'male');

console.log('females', females);
console.log('males', males);

//　重複を削除したいとき

const list = [1, 2, 3, 3, 2, 2, 5];

const noDuplicateList = list.filter((value, index, origin) => {
  console.log(value, index, origin.indexOf(value));
  return origin.indexOf(value) === index;
});

console.log('noDuplicateList', noDuplicateList);

const tanaka = {
  occupation: 'engineer',
  sex: 'male',
  like: 'meat',
};

const addTanakaInfo = {
  sleep: 'at 11:00PM',
  pc: 'Mac',
  occupation: 'doctor',
  sex: 'female',
  like: 'fish',
};

const tanakaInfo = { ...tanaka, ...addTanakaInfo };

console.log('tanakaInfo', tanakaInfo);

const { sleep, pc, occupation } = tanakaInfo;

console.log(sleep);
console.log(pc);
console.log(occupation);

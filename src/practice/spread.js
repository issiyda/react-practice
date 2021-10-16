const prefectures = ['広島', '山口', '東京', '佐賀'];
const addPrefectures = ['長崎', '石川', '島根'];

// ...で展開する
const mergePrefectures = [...prefectures, ...addPrefectures];
console.log('mergePrefectures', mergePrefectures);

const ishida = {
  occupation: 'engineer',
  sex: 'male',
  like: 'meat',
};

const addIshidaInfo = {
  sleep: 'at 11:00PM',
  pc: 'Mac',
};

const ishidaInfo = { ...ishida, ...addIshidaInfo };
console.log('ishidaInfo', ishidaInfo);

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

// 同じキーは上書きされるよ！！！
const tanakaInfo = { ...tanaka, ...addTanakaInfo };

console.log('tanakaInfo', tanakaInfo);

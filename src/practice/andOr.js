// [職業, 性別, 年齢]
const takahiro = ['engineer', 'man', 30];
const mei = ['student', 'woman', 20];
const yosiki = ['student', 'man', 26];
const takumi = ['normal', 'man', 40];

const response = (person) => {
  if (person[0] === 'engineer' && person[1] === 'man') {
    return '即戦力としてぜひきてください';
  } else if (
    person[0] === 'student' &&
    person[1] === 'woman' &&
    person[2] < 25
  ) {
    return '学生かつ25歳未満の元気の良い女性を探していました！！';
  } else if (person[0] === 'student' || person[2] < 25) {
    return '学生または25歳未満の方を募集していました！！';
  } else {
    return 'お断りさせてください';
  }
};

console.log('takahiro', response(takahiro));
console.log('mei', response(mei));
console.log('yosiki', response(yosiki));
console.log('takumi', response(takumi));

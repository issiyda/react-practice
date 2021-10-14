const name = 'ishida';

let word = '';

// ifで書いた場合
if (name === 'ishida') {
  word = '私は石田です。';
} else {
  word = '私は石田ではありません。';
}

console.log(word);

word =
  name === 'ishida'
    ? // 条件式がtrueの場合
      (word = '私は石田です。')
    : // 条件式がfalseの場合
      (word = '私は石田ではありません。');

console.log('sankou', word);

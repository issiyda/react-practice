// 従来の書方
const twice = function (number) {
  return number * 2;
};

console.log('twice', twice(3));

// アロー関数
const twice2 = (number) => {
  console.log('aaa');
  // returnを書く
  return number * 2;
};

console.log('twice2', twice2(3));

//　本文が1文であるときの書き方
const twice3 = (number) => number * 2;

console.log('twice3', twice3(3));

// 引数がない場合
const twice4 = () => 'aaaaa';

console.log('twice4', twice4());

// 引数がない場合
const twice5 = (number1, number2) => number1 * number2;

console.log('twice5', twice5(10, 10));

const answerWord = (answer) => {
  let word = '';
  word = answer ?? 'nullかundefinedだったんですね';

  console.log(word);
};

answerWord('僕はnullじゃないですよ！！');
answerWord(null);
answerWord(undefined);

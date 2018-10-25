console.log('старт программы');

setTimeout(() =>  console.log('setTimeout 0'), 0);

Promise.resolve().then(function() {
  console.log('promise');
}).then(function() {
  console.log('следующий promise');
});

console.log('выход из потока');
console.log('выход из программы');
console.log('старт программы');

const promiseObject = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Math.random();
        if(result > .5) {
            resolve(result);
        }
        reject('result <= .5')

    }, 1000)
})

promiseObject.then(data => data *= 10)
             .then(data => data.toFixed(0))
             .then(data =>  console.log(data))
             .catch(err => console.log(err));

console.log('выход из потока');
console.log('выход из программы');
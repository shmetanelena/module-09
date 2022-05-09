const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("====", 1000);
const promiseB = makePromise("++++", 3000);

//promiseA.then((value) => console.log(value));

Promise.all([promiseA, promiseB])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

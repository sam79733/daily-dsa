const checkPromise = function (number) {
  return new Promise((res, rej) => {
    if (number > 10) {
      res('Promise Resolved');
    } else {
      rej('Promise Reject');
    }
  });
};
console.log('');
const asyncFunc = async function () {
  for (let index = 0; index < 10000; index++) {
    console.log('async function');
  }
};

const prom = function () {
  let random = Math.floor(Math.random() * 9) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random < 5) {
        resolve(random);
      } else {
        reject('promise not fulfilled');
      }
    }, 1000); // Added 1-second delay
  });
};

const callPromise = async () => {
  try {
    const res = await prom();

    console.log(res);
  } catch (error) {
    console.log('promise not fullfilled');
  }
};

const fetchCall = async () => {
  const response = await fetch('https://dummyjson.com/carts');
  const data = await response.json();
  console.log(data);
};

fetchCall();

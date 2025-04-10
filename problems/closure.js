function outerFunction() {
  let outerVariable = 'I am a outer variable';
  function innerFunction() {
    let innerVariable = 'I am a inner variable';
    console.log(outerVariable);
  }
  innerFunction();
  return () => {
    console.log(outerVariable, ' but with closure');
  };
}

function bankAccount(name) {
  let balance = 1000;

  return {
    getBalance: () => {
      console.log(`${name}'s balance is $${balance}`);
    },
    deposit: (amount) => {
      balance += amount;
      console.log(`Deposited $${amount}, New balance is $${balance}`);
    },
  };
}

function toggelTheme() {
  let isDarkMode = false;

  document.querySelector('.container button').addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.querySelector('.container').classList.add('dark');
      document.querySelector('.container button').textContent = 'Change to Light';
    } else {
      document.querySelector('.container').classList.remove('dark');
      document.querySelector('.container button').textContent = 'Change to Dark';
    }
  });
}

const johnAccount = bankAccount('John');
johnAccount.getBalance();
johnAccount.deposit(1000);

function delayMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delayMessage('This is a delayed message', 3000);

function factorOf() {
  let cache = {};

  return function factorial(number) {
    if (number in cache) return cache[number];
    if (number == 1 || number == 0) return 1;

    return (cache[number] = number * factorial(number - 1));
  };
}

const fact = factorOf();
console.log(fact(5));

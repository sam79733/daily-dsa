const greet = function (message, punctuation) {
  console.log(`Hi ${this.name}, ${message}${punctuation}`);
};

const person = { name: 'Alice' };

greet.call(person, 'Good Morning', '!');

greet.apply(person, ['you are looking fantastic', '!']);

const greetobj = greet.bind(person, 'you are cool');
greetobj('!');

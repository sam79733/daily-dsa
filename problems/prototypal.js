//Explain prototypal inheritance

function person(name) {
  this.name = name;
}

person.prototype.hello = function () {
  return `hello ${this.name}`;
};

function Developer(name, title) {
  person.call(this, name);
  this.title = title;
}

Developer.prototype = Object.create(person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getTitle = function () {
  return this.title;
};

const obj = new Developer('Alice', 'Software Engineer');
console.log(obj.hello());
console.log(obj.getTitle());

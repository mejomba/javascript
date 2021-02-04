// string Methods
// arary iterators - (map, filter, reduce)
// global objects - Math, Date
// ===================== 1

// string properties and methods
// don't memorize methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://www.w3schools.com/js/js_string_methods.asp

// let text = ' Mojtaba Aminzadeh'
// let result = text.length
// console.log(result);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(1));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('Aminzadeh'));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toLowerCase().startsWith('mojtaba'));
// console.log(text.includes('amin'));
// console.log(text.slice(2, 3));
// console.log(text.slice());

// const person = {
//  name: 'mojtaba', // property
//  hello() {
//   console.log("hello I'm mojtaba");
//  },
// }

// console.log(person);
// console.log(person.name);
// person.hello();



// ================================== 2
// Template Literals - ES6+
// Backtick characters ``
// Interpolation ${} - insert expresion(value)

// const name = 'mojtaba';
// const age = 27;
// const sentence = "hey i'm " + name + " and i have " + age + " years old";

// const value = `hey i'm ${name} and i have ${age} years old ${2 + 2}`;

// console.log(sentence);
// console.log(value);



// ================================== 3
// Array Properties and Methods
// let names = ['john', 'bobo', 'barry', 'ben'];

// // lenght
// console.log(names.length);
// console.log(names[names.length - 1]);

// // concat
// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// // reverse
// console.log(allNames.reverse());

// // unshift
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);
// // shift
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push
// allNames.push('susy');
// console.log(allNames);

// // pop
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // splice - mutates original array
// const newArray = allNames.splice(2, 1);
// console.log(newArray);
// console.log(allNames);

// // Arrays and for loop

// const names = ['anna', 'susy', 'bob'];
// const lastNames = 'blob';
// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//  let fullName = `${names[i]} ${lastNames}`
//  newArray.push(fullName)
// }
// console.log(names);
// console.log(newArray);


// ================================== 4
// Callback Functions
// passed to a another function as an argument

// function morning(name) {
//  return `Good Morning ${name}`
// }

// function afternoon(name) {
//  return `Good afternoon ${name}`
// }

// function greeting(name, cb) {
//  const myName = name;
//  console.log(`${cb('mojtaba')}, my name is ${myName}`);
// }

// greeting('peter', morning);
// greeting('peter', afternoon)


// ================================== 5
// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept Callback function as an argument

// const numbers = [1, 2, 3, 4]

// show all numbers
// for (let i=0; i < numbers.length; i++) {
//  console.log(numbers[i]);
// }

// function iterateArray(any) {
//  console.log(any);
// }
// numbers.forEach(iterateArray)


// numbers.forEach(function (any) {
//  console.log(any);
// });

// numbers.forEach(any => {
//  console.log(any);
// });


// ================================== 6
// map
// dose return a new array
// dose not change size of original array

// const people = [
//  {name: 'bob', age: 20, position: 'developer'},
//  {name: 'peter', age: 25, position: 'designer'},
//  {name: 'susy', age: 30, position: 'boos'},
// ]

// const ages = people.map(function (person) {
//  console.log(person.age);
//  age = person.age + 5
//  return age
// });

// console.log(ages);

// const names = people.map(person => {
//  return `<h1>${person.name}</h1>`
// })
// console.log(names);
// document.body.innerHTML = names.join('');


// ================================== 7
// filter
// dose return a new array
// can manipulae the size of new array
// return based on candition

// const people = [
//  {name: 'bob', age: 20, position: 'developer'},
//  {name: 'peter', age: 25, position: 'designer'},
//  {name: 'susy', age: 30, position: 'boos'},
//  {name: 'ana', age: 35, position: 'boos'}
// ]

// const youngPeople = people.filter(function(person) {
//  return person.age < 30;
// });
// console.log(youngPeople);

// const developer = people.filter(person => {
//  return person.position === 'developer'
// })
// console.log(developer);




// ================================== 8
// find
// returns single instance
// returns first match, if no match undifiend
// gread for getting unique value

// const people = [
//  {name: 'bob', age: 20, position: 'developer', id:1},
//  {name: 'peter', age: 25, position: 'designer', id:2},
//  {name: 'susy', age: 30, position: 'boos', id:3},
//  {name: 'ana', age: 35, position: 'boos', id:4}
// ]

// const person = people.find(function(person){
//  return person.id === 10
// })
// console.log(person);



// ================================== 9
// reduce
// iterate, callback function
// reduces to a single value - number, arary, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

// const people = [
//  {name: 'bob', age: 20, position: 'developer', id:1, salary: 200},
//  {name: 'peter', age: 25, position: 'designer', id:2, salary: 300},
//  {name: 'susy', age: 30, position: 'boos', id:3, salary: 500},
//  {name: 'ana', age: 35, position: 'boos', id:4, salary: 600}
// ]

// const total = people.reduce(function(acc, curr) {
//  if (curr.position === 'boos') {
//   acc += curr.salary
//  }
//  return acc
// }, 0)
// console.log(total);
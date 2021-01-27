// string Methods
// arary iterators - (map, filter, reduce)
// global objects - Math, Date
// =====================

// string properties and methods
// don't memorize methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://www.w3schools.com/js/js_string_methods.asp

let text = ' Mojtaba Aminzadeh'
let result = text.length
console.log(result);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('Aminzadeh'));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('mojtaba'));
console.log(text.includes('amin'));
console.log(text.slice(2, 3));
console.log(text.slice(-5));



// const person = {
//  name: 'mojtaba', // property
//  hello() {
//   console.log("hello I'm mojtaba");
//  },
// }

// console.log(person);
// console.log(person.name);
// person.hello();
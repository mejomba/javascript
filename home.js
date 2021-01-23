// // https://hackr.io/blog/javascript-cheat-sheet
// // storing values with assignment operator
// var a;
// var b = 2;
// console.log(a);
// a = 7;

// b = a;

// console.log(a);
// console.log(b);


// // uninitialized variables
// var a = 5;
// var b = 10;
// var c = 'I am a';

// a = a + 1;
// b = b + 5;
// c = c + ' string';

// console.log(a);
// console.log(b);
// console.log(c);

// // case sensitiveity in variables
// var stydlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// STUDLYCAPVAR = 10;
// ProperCamelCase = "a string";
// TitleCASEOver = 1000;

// console.log(ProperCamelCase);
// console.log(properCamelCase);

// // adding number
// var sum = 10 + 10;
// console.log(sum);

// // subtracting numbers
// var difference = 10 - 3;
// console.log(difference);

// // multiplying numbers
// var product = 10 * 3;
// console.log(product);

// // diving number;
// var div = 10 / -0;
// console.log(div);

// // incrementing number
// var myVar = 20;
// myVar = myVar + 1;
// myVar ++;
// console.log(myVar);

// // decrementing number
// var myVar = 20;
// myVar = myVar - 1;
// myVar --;
// console.log(myVar);

// // reminder
// var reminder;
// reminder = 11 % 3;
// console.log(reminder);

// // compound assignment with augmented addition
// var a = 5;
// var b = 10;
// var c = 'I am a';

// a += 1;
// b -= 5;
// c += ' string';

// console.log(a);
// console.log(b);
// console.log(c);

// // scape string litral
// var myStr = "I am a \\\"double quoted\" string inside \"double quotes\"";
// console.log(myStr);

// // scape qouting string with single qoutes
// var myStr = '"I am a "double quoted" string inside "double quotes"';
// console.log(myStr);

// var myStr = `"I am a "double quoted" string inside 'double quotes""`;
// console.log(myStr);


// // string length
// var myStr = 'mojtaba';
// console.log(myStr.length);

// // using []
// console.log(myStr[0]);
// console.log(myStr[2]);

// // find last item
// console.log(myStr[myStr.length - 1]);

// // find nth from last
// console.log(myStr[myStr.length - 4]);

// Implicit Type Conversion

// const name = 'mojtaba'
// const lastName = 'aminzadeh'
// const fullName = name + ' ' + lastName
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = number / lastName;
// console.log(value);

// let number3 = 10;
// let number4 = '5';
// const result2 = number3 + number4;
// console.log(result2);

// const randomNumber = 5;
// document.querySelector('.form').addEventListener('submit', function (e) {
//  e.preventDefault();
//  let value = document.getElementById('amount').value;
//  // console.log(typeof(value));
//  value = parseInt(value);
//  console.log('input value: ', value);
//  console.log('sum of value: ', randomNumber + value);
// });


// function
// function hello(name, lastName){
//  let hello = 'hello ' + name + lastName
//  return hello
// }


// const hello = function (name, lastName){
//  let hello = 'hello ' + name + lastName
//  return hello
// }

// const add = (num1, num2)=> num1 + num2;

// let name = 10
// hello(name, ' aminzadeh')
// hello('mohamad', ' ahmadi')

// let xxx = add(5, 4)
// console.log(xxx);



// object

// const person = {
//  name: 'mojtaba',
//  lastName: 'aminzadeh',
//  age: 27,
//  friends: ['mohamad', 'sina'],
//  sayHello: function (){
//   console.log('hello');
//  }
// }

// console.log(person.name);
// console.log(person.friends[1]);
// person.sayHello();




// conditional statements
// // if else
// comparison operators
// >, <, >=, <=, ==, ===, !=, !==
// == checks only value
// === checks value and type
// logical operator
// || && !


// const name = 'mojtaba'
// const age = 27
// gender = 'male'
// if (!(name === 'mojtaba' || age == 25) || gender !== 'male') {
//  console.log('xxxxxx');
// }


// if (num1 > num2) {
//  console.log('hello');
// } else if (num1 == num2) {
//  console.log('num1 == num2');
// }
//  else {
//  console.log('num2 > num1');
// }



// switch
// dice value: 1 - 6

// var dice = 0;

// switch (dice) {
//  case 1:
//   console.log('you got one');
//   break

//  case 2:
//   console.log('you got tow');
//   break

//  case 3:
//   console.log('you got three');
//   break
  
//  default:
//   console.log('out of range');
// }






// if (dice == 1) {
//  console.log('you got one');
// }
// else if (dice == 2) {
//  console.log('you got two');
// }
// else {
//  console.log('out of range');
// }



// // while loop
// var mony = 10;
// while (mony > 0) {
//   console.log('you have ' + mony);
//   mony--
// }



// // do while
// var mony = -10;
// do {
//   console.log('you have ' + mony);
//   mony--
// }
// while(mony > 0)

// for loop

for (var i = 10 ; i > 0 ; i-=0.5) {
  console.log(i);
}


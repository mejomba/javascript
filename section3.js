// // similar to css

// // select the element or group of elements
// // effect the selection

// // many different wary

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// // assign to a variable
// const element = document.getElementById('element');
// // some code

// document.querySelector('.btn');
// // some code

// // window object
// // console.log(window);

// // retrns a node object or a node list >> arraylike object

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css);



// // ============================== 2
// // getElementById('id');
// // get single item
// const head = document.getElementById('heading');
// head.style.color = 'green';

// const button = document.getElementById('btn');
// button.style.color = 'red';
// button.style.backgroundColor = 'green';


// // ============================== 3
// // getElementsByTagName('tagname');
// // node-list = array-like object
// // index, length property but not array methods
// const heading = document.getElementsByTagName('h2');
// // heading[0].style.color = 'tomato';
// const myArray = [...heading]
// myArray.forEach(function(item) {
//  item.style.color = 'tomato'
// });
// // console.log(heading);
// // console.log(myArray);

// const listItem = document.getElementsByTagName('li');
// for (let i=0; i<listItem.length; i++) {
//  listItem[i].style.color = 'green';
// }


// ============================== 4
// getElementsByClassName('classname');
// array-like object
// index, length property but not array methods
// const listItems = document.getElementsByClassName('special');
// listItems[0].style.backgroundColor = 'blue'


// ============================== 5
// querySelector('any css); - select single
// querySelectorAll('any css); - select all
// const result = document.querySelector('#result');
// result.style.backgroundColor = 'green'

// const listItems = document.querySelectorAll('.special');
// // console.log(listItems);
// listItems.forEach(function(item) {
//  item.style.color = 'red';
// })
// const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

// ============================== 6
// childNodes - returns all childNodes including whitespace

// children
// firstChild
// lastChild
// const result = document.querySelector('#result');
// console.log(result.childNodes);
// console.log(result.children);
// console.log(result.firstChild);
// console.log(result.lastChild);

// parentElement
// const heading = document.querySelector('h2');
// heading.parentElement.style.color = 'red'


// ============================== 7
// previousSibling
// nextSibling
// return whitespace
// const first = document.querySelector('.first');
// console.log(first.nextSibling.nextSibling);

// const last = document.querySelector('.last');
// last.previousSibling.previousSibling.style.color = 'red'


// previousElementSibling
// nextElementSibling
// const first = document.querySelector('.first');
// console.log(first.nextElementSibling);
// console.log(first.previousElementSibling);

// nodeValue
// textContent
// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;
// console.log(value);
// console.log(item.firstChild.nodeValue);
// console.log(item.textContent);


// ============================== 8
// getAttribute();
// setAttribute();
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
console.log(idValue);
console.log(first);

const link = document.getElementById('link');
console.log(link.getAttribute('href'));

const last = link.nextElementSibling;
console.log(last);
last.setAttribute('class', 'first second');
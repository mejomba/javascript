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
// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// console.log(idValue);
// console.log(first);

// const link = document.getElementById('link');
// console.log(link.getAttribute('href'));

// const last = link.nextElementSibling;
// console.log(last);
// last.setAttribute('class', 'first second');

// className
// classList
// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');
// console.log(first.className);
// first.className = 'text colors';
// // first.className = 'colors';
// // second.className = 'text colors'
// second.classList.add( 'colors');
// second.classList.remove('colors')

// console.log(second.classList.contains('text'));
// if (second.classList.contains('text')) {
//  second.classList.add('colors')
// } else {
//  second.classList.add('text')
// }
// console.log(second.classList);


// ============================== 9
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore('element', 'location')
// replaceChild(old, new);

// const result = document.getElementById('result');

// const bodyDiv = document.createElement('div');
// const text = document.createTextNode('a simple body text');
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result)

// const first = document.querySelector('.red');
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('heading text');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.insertBefore(heading, first);


// ============================== 10
// remove
// removeChild
// const result = document.querySelector('#result');
// // result.remove();
// const heading = result.querySelector('h1');
// console.log(heading);
// result.removeChild(heading);


// ============================== 11
// innerHTML
// textContent
// const list = document.querySelector('#first');
// const item = document.querySelector('.item');
// const div = document.querySelector('#second');
// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">list item</li>
//       <li>list item</li><li>list item</li>`;
// document.body.appendChild(ul)

// const someVar = 'random value'
// div.textContent = 'hello world'
// div.innerHTML = `<li class="item">${someVar}</li>
//       <li>list item</li><li>list item</li>`


// ============================== 12
// select element
// addEventListener()
// what event, what to do
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function() {
//  let hasClass = heading.classList.contains('red');
//  if (hasClass) {
//   heading.classList.remove('red');
//  }else {
//   heading.classList.add('red');
//  }
// })



// ============================== 13
// click
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function() {
//  console.log('you click me');
// })
// btn.addEventListener('mousedown', function() {
//  console.log('down');
// })
// btn.addEventListener('mouseup', function() {
//  console.log('up');
// })

// heading.addEventListener('mouseenter', function() {
//  heading.classList.add('red');
// })
// heading.addEventListener('mouseleave', function() {
//  heading.classList.remove('red');
// })






// ============================== 14
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
// const input = document.getElementById('name');
// const  p = document.querySelector('p');

// input.addEventListener('keypress', function () {
//  console.log('keypress');
// })
// input.addEventListener('keydown', function () {
//  console.log('keydown');
// })
// input.addEventListener('keyup', function () {
 // console.log(input.value);
 // p.textContent = input.value
// })






// ============================== 15
// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h1');
// const link = document.getElementById('link');

// heading.addEventListener('click', (e) => {
//  // this.classList.add('red');
//  console.log(e);
//  console.log(this);
// })

// btn.addEventListener('click', function (e) {
//  e.currentTarget.classList.add('red');
//  console.log(e.type);
// })

// link.addEventListener('click', function (xxx) {
//  xxx.preventDefault();
// })






// ============================== 16
// currentTarget - always refers to the element to which the event handler has been attached to
// target - idendifies the element on which the event occured
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
 btn.addEventListener('click', function(e) {
  // console.log(e.currentTarget);
  // e.currentTarget.style.color = 'green';
  console.log(e.target);
  e.target.style.color = 'green';
 })
})
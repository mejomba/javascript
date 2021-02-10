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



// ============================== 2
// getElementById('id');
// get single item
const head = document.getElementById('heading');
head.style.color = 'green';

const button = document.getElementById('btn');
button.style.color = 'red';
button.style.backgroundColor = 'green';


// ============================== 3
// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods
const heading = document.getElementsByTagName('h2');
// heading[0].style.color = 'tomato';
const myArray = [...heading]
myArray.forEach(function(item) {
 item.style.color = 'tomato'
});
// console.log(heading);
// console.log(myArray);

const listItem = document.getElementsByTagName('li');
for (let i=0; i<listItem.length; i++) {
 listItem[i].style.color = 'green';
}
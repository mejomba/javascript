// similar to css

// select the element or group of elements
// effect the selection

// many different wary

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable
const element = document.getElementById('element');
// some code

document.querySelector('.btn');
// some code

// window object
// console.log(window);

// retrns a node object or a node list >> arraylike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(name);
console.log(css);
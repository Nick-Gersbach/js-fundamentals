let val;

//Viewing everything in the document (web page)
val = document;
console.log(val);

//Get a collection of all html elements from the page
val = document.all;
console.log(val);


//Get Specific elements from the page using the 0 based sysytem
val = document.all[2];
console.log(val);

//using .length to see how many elements are in the DOM
val = document.all.length;
console.log(val);

//Access the head of the document
val = document.head;
console.log(val);

//Access the body of the document
val = document.body;
console.log(val);

//View the doctype of the document
val = document.doctype;
console.log(val);


//View the domain/ip address of the document
val = document.domain;
console.log(val);

//Select Objects without using a selector
val = document.forms
console.log(val);

//Now you can sopecify which form you want by using the index of 
val = document.forms[0];
console.log(val);


//SELECTORS FOR SINGLE ELEMENTS

/* Notes

SINGLE ELEMENT SELETORS - allow you to grab one element by it's id/class and it only stores one thing. If you use a singler element selector on a class that appaears more than once in the DOM, it will just select the first element with that class.

MULTI ELEMENT SELECTORS - Grab all elements with that class and return an html collection/nodelist.

*/

//document.getElementById()
console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);

//Change the styling
document.getElementById('task-title').style.background = 'purple';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '20px';
document.getElementById('task-title').style.textAlign = 'center';

//Change the content of a tag
document.getElementById('task-title').textContent = 'I Changed The Text';
document.getElementById('task-title').innerText = 'My Tasks';
//Insert another HTML Element
document.getElementById('task-title').innerHTML = '<span style = "color: red">Task List</span>';

//Instead of selecting elements the long way like we did above, you should just store them in variables

const taskForm = document.getElementById('task-form');

//Making an onclick event with our variable
taskForm.onclick = function () {
    alert('you clicked the task form');
}

//Changing the style with our variable
taskForm.style.background = 'orange';
taskForm.style.color = 'white';


//document.querySelector() (ES6) newer and much more powerful. You should use this in modern apps because it allows you to select elements by class, id, really anything.

//select by id
console.log(document.querySelector('#task-title'));
//select by class
console.log(document.querySelector('.card-title'));
//select by element
console.log(document.querySelector('h5'));

//Since querySelector is a single element selector, it's only going to select and style the first li element
document.querySelector('li').style.color = 'red';

//You can also use psuedo classes with querySelector
document.querySelector('li:last-child').style.color = 'purple';
document.querySelector('li:nth-child(2)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = "what's up";



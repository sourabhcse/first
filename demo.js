//console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.baseURI);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent="todo";
console.log(document.forms);
console.log(document.images);
var header=document.getElementById('header-title');
console.log(header);
header.textContent='shiva'
//header.innerHTML='<h1>Dolli</h1>'
header.style.borderBottom='solid 5px red'
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Raj';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';



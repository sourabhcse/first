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
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[2].style.backgroundColor='green';

//editing by tag name

//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='Raj';
//li[0].style.fontWeight='bold';
//li[1].style.fontWeight='bold';
//li[2].style.fontWeight='bold';
//li[3].style.fontWeight='bold';
//li[2].style.backgroundColor='green';

/*var sed=document.querySelector('.list-group-item:nth-child(2)');
sed.style.backgroundColor = 'green';

var td=document.querySelector('.list-group-item:nth-child(3)');
td.style.display = 'none';

var items=document.querySelectorAll('.list-group-item');
items[1].style.color='blue';

var odd=document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor='red';
}*/

var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.background='yellow'
console.log(itemList.parentElement.parentElement.parentElement);

//lastchild
console.log(itemList.lastChild);
// lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='vijay';

//firstchild
console.log(itemList.firstChild);
// firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='jay';

//nextsibling
console.log(itemList.nextSibling);
// nextelement
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
// previouselement
console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='pink';

//craeteelement
var  newDiv=document.createElement('div');
newDiv.className='ram';
newDiv.id='kk';
newDiv.setAttribute('title','jjjj');
var newDivText=document.createTextNode('world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1)


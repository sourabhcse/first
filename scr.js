var myspan= document.getElementsByClassName("myspan");
for(var i=0; i<myspan.length;i++)
    {
     myspan[i].onClick= function()
    {
      var divit = this.parentElement;
      div.style.display="none";
    }
  }


var list =document.querySelector("ul");
list.addEventListener('click', function(event){
  if(event.target.tagName==='LI')
    {
      event.target.classList.toggle('checked')
    }
});

function addBtn()
{
   var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
 if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("Myul").appendChild(li);
  }
  document.getElementById("myinput").value="";
  
  var span = document.createElement("myspan");
  var text = document.createTextNode("\u00D7")
  span.className="myspan";
  span.appendChild(text);
  li.appendChild(span)
  
  for(var i=0; i<myspan.length;i++)
    {
     myspan[i].onclick = function(){
        var divit=this.parentElement;
      divit.style.display="none";
     }
    } 
}
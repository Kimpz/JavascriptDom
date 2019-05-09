  
var addBtn = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.getElementsByTagName('ul')[0];
var del = document.getElementById('delete');

function addItemLength(){
  return document.getElementById('userInput').value.length;
}

function checkLis(){
  return document.getElementsByTagName('li').length;
}

function  createListItem(){
  var li = document.createElement('li');
  li.classList.add('listItem');
  li.append(document.createTextNode(input.value));
  li.addEventListener('click', toggleDone);
  ul.appendChild(li);
  input.value="";

  var delBtn = document.createElement('button');
  var delX = document.createElement('i');
  delX.classList.add('fas','fa-times');
  delBtn.classList.add('custBtn');
  delBtn.appendChild(delX);
  delBtn.addEventListener('click',delItem);
  li.append(delBtn);

  

  if(checkLis() > 0) {
    var emptyList = document.querySelector('h2');
    emptyList.style.display = "none";
  }

  function toggleDone(){
    li.classList.toggle('done');
  }

  function delItem() {
    li.remove();
    if(checkLis() == 0){
      var emptyList= document.querySelector('h2');
      emptyList.style.display= "block";
    }
  }
}


  function addClick(){
    if(addItemLength() >0){
      createListItem();
    }
  }

 
  function addKey(event) {
  if(addItemLength() > 0 && event.keyCode == 13) {
    createListItem();
  }
}

// function del1() {
//   var delAll = document.getElementById("userInput");
//   delAll.removeChild(list.childNodes[0]);
// }

addBtn.addEventListener('click',addClick);
input.addEventListener('keypress',addKey);
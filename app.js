var listBox = document.getElementById('listBox');
function addTodo(){
    var input = document.getElementById('input');
    console.log(input.value.length)

    if(input.value.length > 3){
         console.log('correct')
         var li = document.createElement('li');
         var liTxt = document.createTextNode(input.value);
         li.appendChild(liTxt);
         console.log(li);

         
         var delBtn = document.createElement('button');
         var delBtnTxt = document.createTextNode('DELETE');
         delBtn.appendChild(delBtnTxt);
         delBtn.setAttribute('onclick', 'delList(this)');
         console.log(delBtn);

         var editBtn = document.createElement('button');
         var editBtnTxt = document.createTextNode('EDIT');
         editBtn.appendChild(editBtnTxt);
         editBtn.setAttribute('onclick', 'editList(this)');
         console.log(editBtn);

         li.appendChild(editBtn);
         li.appendChild(delBtn);

         listBox.appendChild(li);
         input.value = "";
    }else{
        alert("Enter Correct Input Value")
    }
}

function delAll(){
    listBox.innerHTML = "";
}

function delList(e){
    e.parentNode.remove();
}

function editList(e){
    var editValue = prompt('Enter Edit Value' ,e.parentNode.firstChild.nodeValue);
    console.log(editValue);
    e.parentNode.firstChild.nodeValue = editValue;
}
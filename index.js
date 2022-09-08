let olList = document.getElementById("first-container")
let emailId = document.getElementById("email")
let paraId = document.getElementById("error")

let rowcount = 0

let addBox = false;

function emailValidation(){
    paraId.innerHTML = "";
    let userValue = emailId.value;
    let pattern =/^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if(userValue == ""){
        paraId.innerHTML = "Required";
        paraId.style.color = "Red";
    }else if (!pattern.test(userValue)){
        paraId.innerHTML = "Plase enter valid email address";
        paraId.style.color = "Red";
    }else{
        paraId.innerHTML = "";
    }

}

function validEmail(enterValue,message){
    let pattern =  /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if(enterValue == ""){
        message.innerHTML = "Required";
        message.style.color = "Red";
    }else if (!pattern.test(enterValue)){
        message.innerHTML = "Plase enter valid emial address"
        message.style.color = "Red";
    }else{
        message.innerHTML = "";
        addBox = true;
    }

}

function deleteListItem(btnId){
    //console.log(btnId);
    let delList = document.getElementById(btnId);
    olList.removeChild(delList);
    rowcount -= 1;
    console.log(rowcount)

}
function addList(){
    rowcount += 1
    console.log(rowcount);
    if(rowcount >= 8){
        alert("max limit exceed")
    }
    else {
        let list = document.createElement('li');
        let listId = rowcount + "id";
        list.id = listId ;
        list.classList.add("first-li",'m-3','p-3');
        //console.log(listId)
        
        let para = document.createElement('p')

        let input = document.createElement('input');
        input.type = "email"
        input.placeholder = "enter email";
        input.onblur = function () {
            validEmail(input.value, para)
        }

        let btnAdd = document.createElement("button")
        btnAdd.innerHTML = "add";
        btnAdd.classList.add("btn", 'btn-primary','m-2');
        btnAdd.addEventListener('click', function(){
            if(addBox){
                addList();
                addBox = false;
            }
        }) 
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "delete";
        btnDel.classList.add('btn', 'btn-danger')
        btnDel.addEventListener('click', function () {
            deleteListItem(listId);
            

            
            
        }) 
        
        
        list.append(input, btnAdd, btnDel, para)
        olList.append(list)
    }
    

}





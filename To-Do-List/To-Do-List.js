let buttons = document.querySelector('button')
let Input_ToDo = document.getElementById('Input-ToDo');
let ToDocontainer = document.getElementById('ToDocontainer');

buttons.addEventListener('click',function(){
    let list = document.createElement('p');
    ToDocontainer.classList.add('paragraph-styling');
    list.innerHTML = Input_ToDo.value;
    list.innerText = Input_ToDo.value;
    ToDocontainer.appendChild(list);
    Input_ToDo.value = "";
    list.addEventListener('click',function(){
        list.style.textDecoration = 'Line-through';
    })
    list.addEventListener('dblclick',function(){
        ToDocontainer.removeChild(list)
    })
})
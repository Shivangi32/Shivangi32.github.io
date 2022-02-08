let input=document.querySelector("#todo_input");
let button=document.querySelector("#add_btn");
let list=document.querySelector("ol");
let tasks=[];

const addfunc= (text_to_add)=>{

    if(text_to_add.length==0)
    {
        window.alert("Task can't be empty!");
        return;
    }
    tasks.push(text_to_add);
    const ele=document.createElement("li");
    const text_node=document.createTextNode(text_to_add);
    const del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    ele.appendChild(text_node);
    ele.appendChild(del);
    del.addEventListener('click',(e)=>{
        let idx=tasks.indexOf(text_to_add);
        tasks.splice(idx,1);
        localStorage.setItem("savedTasks", JSON.stringify(tasks));
        ele.remove();
    })
    list.appendChild(ele);
}

input.addEventListener('keydown',e=>{

    if(e.keyCode==13)
    {
       addfunc(input.value);
    }
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
})

button.addEventListener('click',()=>{
    addfunc(input.value);
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
});

window.addEventListener('load',(e)=>{

    const savedTasks=JSON.parse(localStorage.getItem("savedTasks"));
    if(savedTasks.length!=0)
    {
        savedTasks.forEach(text_to_add => {
           addfunc(text_to_add);
        })
        console.log(tasks);
    }
   
});




window.addEventListener("load",()=>
{
    const form  = document.getElementById("new-task-form");
    const taskip= document.getElementById("new-task");
    const task_list = document.getElementById("tasks");

    form.addEventListener("submit",(e)=>
    {
        e.preventDefault()
        const value = taskip.value;
        if(!value)
        {
            alert("Enter a task please ")
            return ;
        }
        const task = document.createElement("div");
        task.classList.add("task");

        const content = document.createElement("div");
        content.classList.add("content");

        const text = document.createElement("input");
        text.classList.add("text");
        text.value = value;
        text.setAttribute("readonly","readonly")
        content.appendChild(text);
    

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const edit = document.createElement("button");
        edit.innerHTML = "EDIT";
        edit.classList.add("edit");
        edit.addEventListener("click",()=>{

            if(edit.innerText.toLowerCase()=="edit")
            {
                text.removeAttribute("readonly");
                text.focus();
                edit.innerHTML = "SAVE";
            }
            else
            {
                text.setAttribute("readonly","readonly");
                edit.innerText = "EDIT";
            }
    })


        actions.appendChild(edit);


        const del = document.createElement("button");
        del.innerHTML = "DELETE";
        del.classList.add("delete");
        del.addEventListener("click",()=>
        {
            task_list.removeChild(task); 
        })
        actions.appendChild(del);

        task.appendChild(content);
        task.appendChild(actions);

        task_list.appendChild(task);
        taskip.value = "";    
    });

})

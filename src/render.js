function addTaskToContainer(){
    let title = document.querySelector("#title").value;
    let date = document.querySelector("#date").value;
    let priority = document.querySelector("#priority").value;
    let newTask = todoFactory(title,dueDate,priority);
    todayTasks.push(newTask);
    renderToday();
}

function renderToday(){
    
    let taskContainerEl = document.querySelector("#tasks-container");
    
    taskContainerEl.innerHTML = "";
    
    for (let i =0; i < todayTasks.length; i++) {
        let task = taskContainerEl[i];
        let taskEl = document.createElement("div");
        taskEl.innerHTML = `
            <div class="task-wrapper">
                <div class="task-checkbox"></div>
                <div class="task-title">${task.title}</div>
                <div class="task-date">${task.dueDate}</div>
                <div class="task-edit"></div>
                <div class="task-delete"></div>
                <div class="task-priority">${task.priority}</div>
            </div>
        `;
        taskContainerEl.appendChild(taskEl);
        console.log("exectued");
    }
}

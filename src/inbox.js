function createInbox() {
    const inbox = document.createElement("div");
    inbox.classList.add("inbox");

    const title = document.createElement("h2");
    title.textContent = "Inbox";

    
    const taskManager = document.createElement("div");
    taskManager.classList.add("task-manager");


    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("add-task-div");
    

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button")
    addTaskButton.textContent = "+";

    addTaskDiv.appendChild(addTaskButton);

    taskManager.appendChild(tasksContainer);
    taskManager.appendChild(addTaskDiv);
    
    inbox.appendChild(title);
    inbox.appendChild(taskManager);
    return inbox;
}

function loadInbox() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createInbox());
}


export default loadInbox;
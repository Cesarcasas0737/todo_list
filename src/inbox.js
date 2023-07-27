import addHTMLContent from "./formSubmition";

//import addHTMLContent from "./formSubmition";
function createInbox() {
    const inbox = document.createElement("div");
    inbox.classList.add("inbox");

    const title = document.createElement("h2");
    title.textContent = "Inbox";

    
    const taskManager = document.createElement("div");
    taskManager.classList.add("task-manager");


    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    const promptTaskDiv = document.createElement("div");
    promptTaskDiv.setAttribute('id','promptTaskDiv');
    

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button")
    addTaskButton.setAttribute('id','addContentButton');
    addTaskButton.textContent = "+";
    addTaskButton.addEventListener('click',function(){
        addHTMLContent();
    });


    promptTaskDiv.appendChild(addTaskButton);

    taskManager.appendChild(tasksContainer);
    taskManager.appendChild(promptTaskDiv);
    
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
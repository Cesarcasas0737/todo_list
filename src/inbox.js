function createInbox() {
    const inbox = document.createElement("div");
    inbox.classList.add("inbox");

    const title = document.createElement("h2");
    title.textContent = "Inbox";

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("tasks-container")

    inbox.appendChild(title);
    inbox.appendChild(taskContainer);
    return inbox;
}

function loadInbox() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createInbox());
}


export default loadInbox;
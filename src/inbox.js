function createInbox() {
    const inbox = document.createElement("div");
    inbox.classList.add("inbox");

    return inbox;
}

function loadInbox() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createInbox());
}

export default loadInbox;
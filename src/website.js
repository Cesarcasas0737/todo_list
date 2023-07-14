function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const websiteName = document.createElement("h1");
    websiteName.classList.add("website-name");
    websiteName.textContent = "To-Do"
    
    header.appendChild(websiteName);
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const inboxButton = document.createElement("button");
    inboxButton.classList.add("button-nav");
    inboxButton.textContent = "Inbox";

    /*
    inboxButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inboxButton);
        loadInbox();
    })
    */

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}

function createMainWrapper() {
    const mainWrapper = document.createElement("div");
    mainWrapper.classList.add("main-wrapper");


    mainWrapper.appendChild(createNav());
    mainWrapper.appendChild(createMain());
    return mainWrapper;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer")

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMainWrapper());
    content.appendChild(createFooter());
}

export default initializeWebsite;

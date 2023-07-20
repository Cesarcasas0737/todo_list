import loadInbox from "./inbox";
import loadToday from "./today";
import loadWeek from "./week";
import loadProject from "./project";

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

    const defaultProjects = document.createElement("div");
    defaultProjects.classList.add("deafult-projects");
    nav.appendChild(defaultProjects);

    const inboxButton = document.createElement("button");
    inboxButton.classList.add("button-nav");
    inboxButton.textContent = "Inbox";
    
    inboxButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inboxButton);
        loadInbox();
    })
    
    const todayButton = document.createElement("button");
    todayButton.classList.add("button-nav");
    todayButton.textContent = "Today";

    todayButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(todayButton);
        loadToday();
    })

    const weekButton = document.createElement("button");
    weekButton.classList.add("button-nav");
    weekButton.textContent = "Week";

    weekButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(weekButton);
        loadWeek();
    })

    const projectButton = document.createElement("button");
    projectButton.classList.add("button-nav");
    projectButton.textContent = "Project";

    projectButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(projectButton);
        loadProject();
    })


    const usersProjects = document.createElement("div");
    usersProjects.classList.add("users-projects");
    usersProjects.appendChild(projectButton);
    nav.appendChild(usersProjects);

    defaultProjects.appendChild(inboxButton);
    defaultProjects.appendChild(todayButton);
    defaultProjects.appendChild(weekButton);
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

/*
function makeImage(imgName){
    const img = document.createElement("img");
    img.classList.add("button-img");
    img.src= `media/svg/${imgName}.svg`;
    img.alt =`${imgName}`;
    return img;
}
*/

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

    setActiveButton(document.querySelector(".button-nav"));
    loadInbox();
}

export default initializeWebsite;

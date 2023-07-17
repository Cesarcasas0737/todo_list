function createWeek() {
    const week = document.createElement("div");
    week.classList.add("Week");

    return week;
}

function loadWeek() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createWeek());
}

export default loadWeek;
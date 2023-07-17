function createToday() {
    const today = document.createElement("div");
    today.classList.add("Today");

    return today;
}

function loadToday() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createToday());
}

export default loadToday;
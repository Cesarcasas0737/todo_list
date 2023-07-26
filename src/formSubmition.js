// Function to add HTML content to the target div
function addHTMLContent() {
    // The HTML content you want to add
    const htmlContent = `
        <form id="new-task-form" >

            <div class="form-inputs-wrapper">
                <label for="title">Title</label>
                <input type="text" id="title" required>

                <div class="row">
                    <label for="date">Date</label>
                    <input type="date" id="date" required> 
                </div>

                <label for="priority">Priority</label>
                <select id="priority" name="priority" required>
                    <option value="priorityOne">#1</option>
                    <option value="priorityTwo">#2</option>
                    <option value="priorityThree">#3</option>
                    <option value="priorityFour">#4</option>
                </select>
            </div>
            <div class="form-buttons row">
                <button id="closeButton">close</button>
                <input type="submit">
            </div>
        </form>
    `;

    // Get a reference to the target div
    const targetDiv = document.getElementsByClassName('add-task-div');


    // Using DOM manipulation (preferred when adding many elements)
    // Create a temporary container element to hold the new content
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlContent;

    // Append the children of the temp container to the target div
    while (tempContainer.firstChild) {
        targetDiv.appendChild(tempContainer.firstChild);
    }
}

// Add event listener to the button to trigger adding content
const addButton = document.getElementById('addContentButton');
addButton.addEventListener('click', addHTMLContent);

export default addHTMLContent;
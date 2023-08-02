function displayForm() {
    const html = `
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
                <button id="closeButton" >close</button>
                <input type="submit">
            </div>
        </form>
    `;
    document.getElementById("promptTaskDiv").innerHTML = html

}


export default displayForm;
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 0;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    nextId += 1;
    localStorage.setItem("nextId", nextId);
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    //     var element = document.getElementById("todo-cards");
    //     <div class="card" style="width: 18rem;">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    // {/* <div class="card">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <button type="button" class="btn btn-danger">Delete</button>
    //   </div>
    // </div> */}
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
})

$(".ui-widget").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    let formData = {
        title: $("#title").val(),
        dueDate: $("#datepicker").val(),
        description: $("#description").val(),
        ID: generateTaskId()
    };

    taskList.push(formData);
    $("#title").val("");
    $("#datepicker").val("");
    $("#description").val("");
    $("#formModal").modal("hide");
    return taskList, nextId;
});

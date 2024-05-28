// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 0;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    nextId += 1;
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    var element = $("#todo-cards");
    let newCard =
        `<div id= "${task.ID}" class="card draggable" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${task.dueDate}</h6>
            <p class="card-text">${task.description}</p>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>`;
    element.append(newCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

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
    taskList.forEach((element) => {
        createTaskCard(element);
    });

    $(".droppable").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            // Add your logic here when a draggable element is dropped
            $(ui.draggable).appendTo($(this)).addClass("dropped-element");
        }
    });


    $(".draggable").draggable({
        containment: "document", // Restrict dragging within the parent element
        cursor: "move", // Set cursor style while dragging
        snap: true, // Snap to grid or other elements
        snapTolerance: 20, // Tolerance in pixels for snapping
        revert: "invalid", // Revert the element if not dropped in a valid droppable target
        start: function (event, ui) {
            // Code to execute when dragging starts
        },
        stop: function (event, ui) {
            // Code to execute when dragging stops
        }
    });
});

$(".ui-widget").submit(function (event) {
    event.preventDefault();
    const dueDate = $("#datepicker").val();
    let formData = {
        title: $("#title").val(),
        dueDate: dueDate,
        unix: new Date(dueDate).getTime() / 1000,
        description: $("#description").val(),
        ID: generateTaskId(),
        column: "to-do"
    };

    console.log(formData.dueDate);
    console.log(formData.unix);

    taskList.push(formData);
    $("#title").val("");
    $("#datepicker").val("");
    $("#description").val("");
    $("#formModal").modal("hide");
    localStorage.setItem("tasks", JSON.stringify(taskList));
    createTaskCard(formData);
    return taskList, nextId;
});
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
        `<div id= "${nextId}" class="card draggable" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${task.dueDate}</h6>
            <p class="card-text">${task.description}</p>
            <button type="button" class="btn btn-danger delete-button">Delete</button>
            </div>`;
    element.append(newCard);

    $(".draggable").draggable({
        opacity: 0.7,
        zIndex: 100,
        helper: function (e) {
            const original = $(e.target).hasClass("ui-draggable")
                ? $(e.target)
                : $(e.target).closest(".ui-draggable");
            return original.clone().css({
                width: original.outerWidth(),
            });
        }
    });
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

function handleDrop(event, ui) {
    console.log("Dropping task");
    const taskId = ui.draggable.attr("id");
    const newProgress = $(event.target).closest(".droppable").attr("id");
    const task = taskList.find((task) => task.id === parseInt(taskId));
};

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    taskList.forEach((element) => {
        createTaskCard(element);
    });

    $(".droppable").droppable({
        accept: ".draggable",
        drop: handleDrop,
    })
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

    taskList.push(formData);
    $("#title").val("");
    $("#datepicker").val("");
    $("#description").val("");
    $("#formModal").modal("hide");
    localStorage.setItem("tasks", JSON.stringify(taskList));
    createTaskCard(formData);
    return taskList, nextId;
});
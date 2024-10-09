// will give errors with typo mistakes, always a good practice to use, enforces good syntax
"use strict";

// function to add a task
function addTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

// function to clear input field
function clearInput(inputField) {
    inputField.value = "";
}

// alternate method to export


// exporting functions

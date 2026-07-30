// ===============================
// Getting HTML Elements
// ===============================

const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Store all tasks
let tasks = [];

// ===============================
// Add Task Button
// ===============================

addBtn.addEventListener("click", addTask);

// ===============================
// Add Task Function
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){

        alert("Please enter a task!");

        return;
    }

    const task = {

        text: taskText,

        date: dueDate.value,

        category: category.value,

        priority: priority.value,

        completed: false

    };

    tasks.push(task);

    displayTasks();

    clearInputs();

}

// ===============================
// Display Tasks
// ===============================

function displayTasks(){

    taskList.innerHTML = "";

    tasks.forEach(function(task,index){

        const li = document.createElement("li");

        li.className = "task";

       li.innerHTML = `

<div class="task-top">

    <span class="task-name ${task.completed ? "completed" : ""}">
        ${task.text}
    </span>

</div>

<div class="task-info">

    <span>📅 ${task.date || "No Date"}</span>

    <span>📂 ${task.category}</span>

    <span>🚩 ${task.priority}</span>

</div>

<div class="actions">

    <button
    onclick="completeTask(${index})"
    class="complete-btn">

    ${task.completed ? "Undo" : "Complete"}

    </button>

    <button
    onclick="deleteTask(${index})"
    class="delete-btn">

    Delete

    </button>

</div>

`;
        taskList.appendChild(li);

    });

}

// ===============================
// Clear Input Fields
// ===============================

function clearInputs(){

    taskInput.value = "";

    dueDate.value = "";

    category.selectedIndex = 0;

    priority.selectedIndex = 0;

}





// =========================
// Complete Task
// =========================

function completeTask(index){

    tasks[index].completed = !tasks[index].completed;

    displayTasks();

}

// =========================
// Delete Task
// =========================

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks();

}
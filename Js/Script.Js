// Cache elements
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const errorMessage = document.getElementById("error");

// Event listeners
taskForm.addEventListener("submit", addTask);
taskInput.addEventListener("input", clearError);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";
  const task = createTaskElement(taskText);
  taskList.appendChild(task);
  taskInput.value = "";
}

function createTaskElement(taskText) {
  const task = document.createElement("div");
  task.classList.add("task");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleTaskCompletion);
  const textNode = document.createTextNode(taskText);
  task.appendChild(checkbox);
  task.appendChild(textNode);
  return task;
}

function toggleTaskCompletion(event) {
  const task = event.target.parentNode;
  task.classList.toggle("completed");
}

function clearError() {
  errorMessage.style.display = "none";
}

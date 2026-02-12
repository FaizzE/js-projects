const todoInput = document.querySelector(".inpt");
const addBtn = document.querySelector(".add");
const todoList = document.querySelector(".list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// --- Load saved tasks ---
window.addEventListener("DOMContentLoaded", () => {
  todos.forEach((t) => renderTodo(t));
});

// --- Add new task ---
function addNewTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  const newTodo = { text, completed: false };
  todos.push(newTodo);
  saveTodos();
  renderTodo(newTodo);

  todoInput.value = "";
}

// --- Render a single task ---
function renderTodo(todoObj) {
  const li = document.createElement("li");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("todo-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todoObj.completed;

  const span = document.createElement("span");
  span.textContent = todoObj.text;
  if (todoObj.completed) span.classList.add("completed");

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";

  li.appendChild(leftDiv);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  // --- Events ---
  checkbox.addEventListener("change", () => {
    todoObj.completed = checkbox.checked;
    span.classList.toggle("completed", todoObj.completed);
    saveTodos();
  });

  delBtn.addEventListener("click", () => {
    li.style.transform = "translateX(20px)";
    li.style.opacity = "0";
    setTimeout(() => {
      li.remove();
      todos = todos.filter((t) => t !== todoObj);
      saveTodos();
    }, 250);
  });
}

// --- Save to localStorage ---
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", addNewTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addNewTodo();
});

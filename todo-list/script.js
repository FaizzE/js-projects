const todo = document.querySelector(".inpt");
const addTodo = document.querySelector(".add");
const todos = document.querySelector(".list");

function addNewTodo() {
  const inputVal = todo.value.trim();
  if (!inputVal) return;

  const newTodo = document.createElement("li");
  newTodo.textContent = inputVal;

  const dltBtn = document.createElement("button");
  dltBtn.textContent = "✕";
  newTodo.appendChild(dltBtn);

  todos.appendChild(newTodo);
  todo.value = "";

  dltBtn.addEventListener("click", () => {
    newTodo.style.transform = "translateX(20px)";
    newTodo.style.opacity = "0";
    setTimeout(() => newTodo.remove(), 250);
  });
}

addTodo.addEventListener("click", addNewTodo);

todo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addNewTodo();
});

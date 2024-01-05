const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

TODOS_KEY = "todos";

let toDos = [];

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todoObj = {
    text: newTodo,
    id: Date.now(),
  };
  paintTodo(todoObj);
  toDos.push(todoObj);
  saveTodos();
}

function paintTodo(todoObj) {
  const li = document.createElement("li");
  li.innerText = todoObj.text;
  li.id = todoObj.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => parseInt(li.id) !== item.id);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedTodos !== null) {
  toDos = savedTodos;
  savedTodos.forEach(paintTodo);
}

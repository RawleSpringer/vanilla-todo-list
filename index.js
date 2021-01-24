let todos = [
  {
    id: 1,
    title: "TODO 1",
    status: false,
    dueDate: "1/30/2021",
    createDate: "1/24/2021",
    category: "Coding",
  },
  {
    id: 2,
    title: "TODO 2",
    status: true,
    dueDate: "1/30/2021",
    createDate: "1/24/2021",
    category: "Exercise",
  },
];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// const $todos = document.querySelector(".main");

//DISPLAY TODOS
//background-color: #FFFFF4;

const createTodoElement = (todo) => {
  const $todoContainer = document.createElement("div");
  $todoContainer.setAttribute("data-id", todo.id.toString());
  $todoContainer.classList.add("todo-container");
  $todoContainer.style.cssText = `
      background-color: #FFF;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

    `;

  const $todoCircle = document.createElement("div");
  $todoCircle.style.cssText = `
      height: 30px;
      width: 30px;
      border: 1px solid black;
      border-radius: 50%;
  `;

  const $todoTextContainer = document.createElement("div");
  $todoTextContainer.style.cssText = `
      flex: 1;
      padding-left: 30px;
  `;
  const $todoText = document.createElement("div");
  $todoText.style.cssText = `
      font-weight: bold;
  `;
  const $todoDueDate = document.createElement("div");
  $todoDueDate.style.cssText = `
      font-size: 12px;
      margin-top: 5px;
  `;
  $todoText.textContent = todo.title;
  $todoDueDate.textContent = todo.dueDate;

  $todoTextContainer.append($todoText);
  $todoTextContainer.append($todoDueDate);

  const $todoDelete = document.createElement("img");
  $todoDelete.classList.add("delete");
  $todoDelete.setAttribute("data-id", todo.id.toString());
  $todoDelete.src = "./icon-trash.svg";

  $todoDelete.addEventListener("click", (e) => {
    deleteTodo(e.target);
    // console.log(e.target);
    // displayTodos();
  });

  $todoDelete.style.cssText = `
  height: 20px;
  width: 20px;
`;

  const $todoFavorite = document.createElement("img");
  $todoFavorite.classList.add("favorite");
  $todoFavorite.src = "./icon-target.svg";

  $todoFavorite.style.cssText = `
    height: 20px;
    width: 20px;
    margin-left: 10px;
  `;

  $todoContainer.append($todoCircle);
  $todoContainer.append($todoTextContainer);
  $todoContainer.append($todoDelete);
  $todoContainer.append($todoFavorite);

  return $todoContainer;
};

const displayTodos = () => {
  const $todos = document.querySelector(".main");
  $todos.innerHTML = "";
  if (todos.length == 0) {
    return;
  }

  todos.forEach((todo) => {
    let $todoItem = createTodoElement(todo);

    $todos.append($todoItem);
  });
};

//ADD TODO

const addTodo = () => {
  const $todoTitle = document.querySelector("textarea");
  const $todoDueDate = document.querySelector(".dueDate");
  const id = uuidv4();
  const title = $todoTitle.value;
  const status = false;
  const createDate = new Date().toDateString();
  const dueDate = $todoDueDate.value;

  const todo = {
    id,
    title,
    status,
    createDate,
    dueDate: dueDate,
  };

  todos.push(todo);
  displayTodos();
};

const $modal = document.querySelector(".modal");
const $addTodoIcon = document.querySelector(".add");
const $newTodo = document.querySelector(".newTodo");
const $exitTodoIcon = document.querySelector(".exit");

const $addTodoSubmitButton = document.querySelector(".add-todo-button");

$addTodoIcon.addEventListener("click", () => {
  $modal.style.display = "block";
  $newTodo.style.display = "block";
});

$exitTodoIcon.addEventListener("click", () => {
  $modal.style.display = "none";
  $newTodo.style.display = "none";
});

$addTodoSubmitButton.addEventListener("click", () => {
  $modal.style.display = "none";
  $newTodo.style.display = "none";

  addTodo();
});

//DELETE TODO
const deleteTodo = (todoEl) => {
  const parent = todoEl.parentNode;

  const newTodoList = todos.filter((todo) => {
    return parseInt(todoEl.dataset.id) !== todo.id;
  });

  todos = newTodoList;
  console.log(todos);
  parent.remove();
};

//EDIT TODO

//DISPLAY CATEGORY

//ADD CATEGORY

//DELETE CATEGORY

//EDIT CATEGORY

//FILTER

//EVENT LISTENERS

displayTodos();

const $deleteTodoIcon = document.querySelectorAll(".delete");
// const $favoriteTodoIcon = document.querySelectorAll(".favorite");

// $deleteTodoIcon.forEach((todo) => {
//   todo.addEventListener("click", (e) => {
//     deleteTodo(e.target);
//     displayTodos();
//   });
// });

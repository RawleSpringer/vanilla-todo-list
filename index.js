let todos = [
  {
    title: "TODO 1",
    status: false,
    dueDate: "1/30/2021",
    createDate: "1/24/2021",
    category: "Coding",
  },
  {
    title: "TODO 2",
    status: true,
    dueDate: "1/30/2021",
    createDate: "1/24/2021",
    category: "Exercise",
  },
];

//DISPLAY TODOS
//background-color: #FFFFF4;

const createTodoElement = () => {
  const $todoContainer = document.createElement("div");
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
  $todoText.textContent = "Testing To See Something";
  $todoDueDate.textContent = "1/22/2020";

  $todoTextContainer.append($todoText);
  $todoTextContainer.append($todoDueDate);

  const $todoFavorite = document.createElement("img");
  $todoFavorite.src = "./star.svg";

  $todoFavorite.style.cssText = `
    height: 20px;
    width: 20px;
  `;

  $todoContainer.append($todoCircle);
  $todoContainer.append($todoTextContainer);
  $todoContainer.append($todoFavorite);

  return $todoContainer;
};

document.querySelector(".main").append(createTodoElement());
//ADD TODO

//DELETE TODO

//EDIT TODO

//DISPLAY CATEGORY

//ADD CATEGORY

//DELETE CATEGORY

//EDIT CATEGORY

//FILTER

const getTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  const container = document.getElementById("container");
  todos.map((todo) => {
    const div = document.createElement("div");
    div.className = "todo_container";
    div.innerHTML = `
            <p>${todo.title}</p>
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
        `;
    container.appendChild(div);
  });
};

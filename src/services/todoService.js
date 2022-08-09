export async function getTodoList(sort = 'id', order = 'asc') {
  const response = await fetch(`http://localhost:3000/todo?_sort=${sort}&_order=${order}`);
  const todoList = await response.json();

  return todoList;
}

export async function createTodo(newTodo) {
  await fetch("http://localhost:3000/todo", {
    method: "POST",
    body: JSON.stringify({ value: newTodo }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

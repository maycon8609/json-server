import { useEffect, useState } from "react";

import { createTodo, getTodoList } from "../services/todoService";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [sort, setSort] = useState("id");
  const [order, setOrder] = useState("asc");

  async function handleFetchData(sort, order) {
    const todoList = await getTodoList(sort, order);

    setTodo(todoList);
  }

  async function handleCreateNewTodo(event) {
    event.preventDefault();

    if (!newTodo) return;

    await createTodo(newTodo);

    setNewTodo("");

    await handleFetchData(sort, order);
  }

  function handleId() {
    setSort("id");
    setOrder((oldState) => (oldState === "asc" ? "desc" : "asc"));
  }

  function handleValue() {
    setSort("value");
    setOrder((oldState) => (oldState === "asc" ? "desc" : "asc"));
  }

  useEffect(() => {
    handleFetchData(sort, order);
  }, [sort, order]);

  return (
    <>
      <form onSubmit={handleCreateNewTodo}>
        <label for="new-todo-input">New Todo</label>
        <input
          autocomplete="off"
          id="new-todo-input"
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>

      <button onClick={() => handleId()}>ID</button>
      <button onClick={() => handleValue()}>NAME</button>
      <ul>
        {todo &&
          todo.map((todo) => (
            <li key={todo.id}>{`${todo.id} : ${todo.value}`}</li>
          ))}
      </ul>
    </>
  );
};

export default Todo;

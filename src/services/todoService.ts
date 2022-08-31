import { TodoItem } from "../Components/Todo";
import { ICreateTodo, IGetTodoList } from "./types";

export const createTodo: ICreateTodo = async (todo) => {
  await fetch("http://localhost:3000/todo", {
    method: "POST",
    body: JSON.stringify({ value: todo }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTodoList: IGetTodoList = async (sort = "id", order = "asc") => {
  const response = await fetch(
    `http://localhost:3000/todo?_sort=${sort}&_order=${order}`
  );
  const todoList: TodoItem[] = await response.json();

  return todoList;
};

import { useEffect, useState } from "react";
import { createTodo, getTodoList } from "../../services";

import { TodoItem, TodoProps } from "./types";

export const useTodo = (): TodoProps => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [sortState, setSortState] = useState<"id" | "value">("id");
  const [orderState, setOrderState] = useState<"asc" | "desc">("asc");

  const handleGetTodoList = async (): Promise<void> => {
    const todoList = await getTodoList(sortState, orderState);

    setTodo(todoList);
  };

  const handleCreateNewTodo = async (): Promise<void> => {
    await createTodo(newTodo);

    setNewTodo("");

    await handleGetTodoList();
  };

  function handleOrderById() {
    setSortState("id");
    setOrderState((oldState) => (oldState === "asc" ? "desc" : "asc"));
  }

  function handleOrderByValue() {
    setSortState("value");
    setOrderState((oldState) => (oldState === "asc" ? "desc" : "asc"));
  }

  useEffect(() => {
    handleGetTodoList();
  }, [sortState, orderState]);

  return {
    items: todo,
    handleCreateNewTodo,
    handleGetTodoList,
    handleOrderById,
    handleOrderByValue,
    newTodo,
    handleSetNewTodo: setNewTodo,
  };
};

export default useTodo;

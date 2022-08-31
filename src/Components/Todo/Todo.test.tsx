import { render, screen, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Todo } from "./Todo";
import { TodoProps } from "./types";
import { ITEMS_DATA } from "./utils";

const makeSut = ({
  items = ITEMS_DATA,
  handleCreateNewTodo = jest.fn(),
  handleGetTodoList = jest.fn(),
  handleOrderById = jest.fn(),
  handleOrderByValue = jest.fn(),
  newTodo = "",
  handleSetNewTodo = jest.fn(),
}: Partial<TodoProps>): Omit<RenderOptions, "wrapper"> => {
  const componente = (
    <Todo
      items={items}
      handleCreateNewTodo={handleCreateNewTodo}
      handleGetTodoList={handleGetTodoList}
      handleOrderById={handleOrderById}
      handleOrderByValue={handleOrderByValue}
      newTodo={newTodo}
      handleSetNewTodo={handleSetNewTodo}
    />
  );

  return render(componente);
};

describe("Todo", () => {
  it("deve renderizar todos os itens", () => {
    makeSut({});

    const todoList = screen.getByTestId("todo--unordered-list");

    expect(todoList.childElementCount).toEqual(ITEMS_DATA.length);
  });

  it("deve conter o item passado por parâmetro", () => {
    makeSut({ items: [{ id: 1, value: "mocked todo" }] });

    const todoValue = screen.getByTestId("todo--id-1-value");

    expect(todoValue).toHaveTextContent("mocked todo");
  });

  it("deve executar a função de criar novo todo", async () => {
    const handleCreateNewTodo = jest.fn();

    makeSut({ handleCreateNewTodo });

    const todoAddButton = screen.getByTestId("todo--add-button");

    await userEvent.click(todoAddButton);

    expect(handleCreateNewTodo).toHaveBeenCalled();
    expect(handleCreateNewTodo).toHaveBeenCalledTimes(1);
  });

  it("deve executar a função de buscar lista de todo", () => {
    const handleGetTodoList = jest.fn();

    makeSut({ handleGetTodoList });

    expect(handleGetTodoList).toHaveBeenCalled();
    expect(handleGetTodoList).toHaveBeenCalledTimes(1);
  });

  it("deve executar a função de ordenação por id", async () => {
    const handleOrderById = jest.fn();

    makeSut({ handleOrderById });

    const orderByIdButton = screen.getByTestId("todo--order-by-id");

    await userEvent.click(orderByIdButton);

    expect(handleOrderById).toHaveBeenCalled();
    expect(handleOrderById).toHaveBeenCalledTimes(1);
  });

  it("deve executar a função de ordenação por valor", async () => {
    const handleOrderByValue = jest.fn();

    makeSut({ handleOrderByValue });

    const orderByValueButton = screen.getByTestId("todo--order-by-value");

    await userEvent.click(orderByValueButton);

    expect(handleOrderByValue).toHaveBeenCalled();
    expect(handleOrderByValue).toHaveBeenCalledTimes(1);
  });

  it("deve conter o valor de newTodo no input", () => {
    makeSut({ newTodo: "new todo" });

    const input = screen.getByTestId("todo--input");

    expect(input).toHaveValue("new todo");
  });

  it("deve executar a função que seta o valor ao digitar", async () => {
    const handleSetNewTodo = jest.fn();
    const NEW_TODO = "new todo";

    makeSut({ handleSetNewTodo });

    const input = screen.getByTestId("todo--input");

    await userEvent.type(input, NEW_TODO);

    expect(handleSetNewTodo).toHaveBeenCalled();
    expect(handleSetNewTodo).toHaveBeenCalledTimes(NEW_TODO.length);
  });
});

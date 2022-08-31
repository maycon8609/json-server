export type TodoItem = {
  id: number;
  value: string;
};

export type TodoProps = {
  "data-testid"?: string;
  handleCreateNewTodo: () => void;
  handleGetTodoList: () => void;
  handleOrderById: () => void;
  handleOrderByValue: () => void;
  handleSetNewTodo: (todo: string) => void;
  items: TodoItem[];
  newTodo: string;
};

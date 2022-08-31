import { useEffect } from "react";

import { TodoProps } from "./types";

export const Todo = ({
  "data-testid": datatestId = "todo",
  handleCreateNewTodo,
  handleGetTodoList,
  handleOrderById,
  handleOrderByValue,
  handleSetNewTodo,
  items,
  newTodo,
}: TodoProps) => {
  useEffect(() => {
    handleGetTodoList();
  }, []);

  return (
    <div data-testid={`${datatestId}--container`}>
      <section data-testid={`${datatestId}--input-section`}>
        <input
          id="new-todo-input"
          type="text"
          value={newTodo}
          onChange={(event) => handleSetNewTodo(event.target.value)}
          data-testid={`${datatestId}--input`}
        />

        <button
          type="button"
          onClick={() => handleCreateNewTodo()}
          data-testid={`${datatestId}--add-button`}
        >
          Add Todo...
        </button>
      </section>

      <section data-testid={`${datatestId}--order-section`}>
        <button
          onClick={() => handleOrderById()}
          data-testid={`${datatestId}--order-by-id`}
        >
          ID
        </button>
        <button
          onClick={() => handleOrderByValue()}
          data-testid={`${datatestId}--order-by-value`}
        >
          VALUE
        </button>
      </section>

      <section data-testid={`${datatestId}--list-section`}>
        <ul data-testid={`${datatestId}--unordered-list`}>
          {items.map((item) => (
            <li
              key={item.id}
              data-testid={`${datatestId}--list-item-${item.id}`}
            >
              <p data-testid={`${datatestId}--id-${item.id}`}>{item.id}</p>
              <p data-testid={`${datatestId}--id-${item.id}-value`}>
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Todo;

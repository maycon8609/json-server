export * from "./Todo";
export * from "./types";

import TodoView from "./Todo";
import { useTodo } from "./useTodo";
import { withHook } from "../../utils";
import { TodoProps } from "./types";

export const Todo = withHook<TodoProps>(useTodo, TodoView);

export default Todo;

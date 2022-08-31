import { TodoItem } from "../Components/Todo";

export type ICreateTodo = (todo: string) => Promise<void>

export type IGetTodoList = (sort?: 'id' | 'value', order?: 'asc' | 'desc') => Promise<TodoItem[]>
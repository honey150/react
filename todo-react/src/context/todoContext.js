import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {id: Date.now(), todo: "todo message", completed: false}
    ],
  todoAdd: (todo) => {},
  todoUpdate: (id, todo) => {},
  todoDelete: (id) => {},
  toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}

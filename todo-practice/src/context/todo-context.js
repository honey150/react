import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: "hello world",
      completed: false
    }
  ],
  addTodo: todo => {},
  updateTodo: (id, todo) => {},
  deleteTodo: id => {},
  completeToggle: id => {}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}


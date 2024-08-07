import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, msg: "hello world" }]
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), msg: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
   state.todos =    state.todos.map(todo =>
        action.payload === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      
    }
  }
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

import { useState, useEffect } from "react";
import { TodoContext, TodoProvider, useTodo } from "./context/";
import { TodoInput, TodoItem } from "./components/";

function App() {
  const [todos, setTodos] = useState(() => {
let savedTodo = localStorage.getItem("todos");
return savedTodo ? JSON.parse(savedTodo) : []
}
);

  const addTodo = todo => setTodos(prevTodos => [todo, ...prevTodos]);

  const updateTodo = (id, todo) =>
    setTodos(prevTodos =>
      prevTodos.map(Todo => (Todo.id === id ? todo : Todo))
    );

  const deleteTodo = id =>
    setTodos(prevTodos => prevTodos.filter(Todo => Todo.id !== id));

  const completeToggle = id =>
    setTodos(prevTodos =>
      prevTodos.map(Todo =>
        Todo.id === id ? { ...Todo, completed: !Todo.completed } : Todo
      )
    );

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("todos"));
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        completeToggle
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(item => (
              <div key={item.id} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

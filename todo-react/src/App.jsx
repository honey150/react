import { TodoProvider, TodoContext, useTodo } from "./context/";
import { FormInput, TodoItem } from "./components/";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todos"));
    return savedTodo ? savedTodo : []
    
    });

  const todoAdd = todo => {
    setTodo(prevTodo => [todo, ...prevTodo]);
  };

  const todoUpdate = (id, todo) => {
    
    setTodo(prev =>
      prev.map(Todos => {
        return Todos.id === id ? todo : Todos;
      })
    );
  };

  const todoDelete = id => {
   setTodo(prev => prev.filter(Todo => Todo.id !== id));
  };

  const toggleComplete = id => {
    setTodo(prev =>
      prev.map(Todo =>
        Todo.id === id ? { ...Todo, completed: !Todo.completed } : Todo
      )
    );
  };

  // useEffect(() => {
  //   let todos = JSON.parse(localStorage.getItem("todos"));
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{
        todo,
        setTodo,
        todoAdd,
        todoUpdate,
        todoDelete,
        toggleComplete
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <FormInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map(item => (
              <div className="w-full" key={item.id}>
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

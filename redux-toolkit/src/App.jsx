import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  

  return (
    <div className="container w-full h-screen bg-zinc-900">
      <div className="todo bg-white bg-opacity-20 backdrop-blur-md">
        <h2 className="text-white text-3xl font-bold text-center p-3">
          Todo App
        </h2>
        <TodoForm />
        <TodoItems />
      </div>
    </div>
  );
}

export default App;

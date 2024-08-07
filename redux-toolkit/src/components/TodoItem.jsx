import { deleteTodo, completeTodo } from "../features/todo/todoSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = useState(todo.msg);
  return (
    <div className="flex  items-center justify-between">
      <input
        type="text"
        value={todoMsg}
        onClick={() => dispatch(completeTodo(todo.id))}
        readOnly
        className={`${
          todo.completed ? "bg-green-600 line-through" : "bg-zinc-700"
        } text-lg px-2 py-1 text-white rounded-md mt-3 outline-none focus:transition-all duration-300`}
      />
      <div className="control-btns  self-end mx-4">
        <button
          disabled={todo.completed}
          className={`${
            todo.completed ? "opacity-80" : ""
          }text-white text-3xl  group-transition-all duration-300`}
        >
          &#9998;
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="deleteBtn"
          className="text-white text-3xl ml-2"
        >
          &#128465;
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

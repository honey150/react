import { useDispatch } from "react-redux";
import { useState } from "react";
import { store } from "../store/store.js";
import { addTodo} from "../features/todo/todoSlice.js";
function TodoForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const handleForm = e => {
    e.preventDefault();
    dispatch(addTodo(data));
    setData("");
  };
  return (
    <div className="w-full todo-input px-4">
      <form
        onSubmit={handleForm}
        className="flex justify-center my-3"
        action="#"
      >
        <input
          className="flex-1 text-xl
            px-2 py-1 rounded-s-lg outline-none"
          type="text"
          name="task"
          id="task"
          onChange={e => setData(e.target.value)}
          value={data}
          placeholder="Enter the task"
        />
        <button
          className="outline-none border-none bg-blue-700 px-3 py-1 text-white rounded-e-lg text-xl"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

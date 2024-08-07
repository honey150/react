import { useTodo } from "../context/";
import { useState } from "react";
function TodoInput() {
  let { todos, addTodo } = useTodo();
  const [inpEmpty, setInpEmpty] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return setInpEmpty(prev => !prev);
    }
    setInpEmpty(false);
    addTodo &&
      addTodo({
        id: Date.now(),
        todo: e.target[0].value,
        completed: false
      });
    e.target[0].value = "";
  };
  console.log(todos);
  return (
    <>
      {inpEmpty &&
          <h2>Please Enter Some Text</h2>}
          
      <form className="flex" onSubmit={e => handleForm(e)}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />

        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoInput;

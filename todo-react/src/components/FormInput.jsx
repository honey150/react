import { useTodo } from "../context/";

function FormInput() {
  let { todo, todoAdd } = useTodo();
  const handleForm = e => {
    e.preventDefault();
    let todoMsg = e.target[0].value;
    todoAdd({ id: Date.now(), todo: todoMsg, completed: false });

    e.target[0].value = "";
  };
  return (
    <form className="flex" method="post" onSubmit={e => handleForm(e)}>
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
  );
}

export default FormInput;

import { useSelector } from "react-redux";
import TodoItem from './TodoItem.jsx'
function TodoItems() {
  let todos = useSelector(store => store.todos)
  return (
    <div className="todo-items my-4 p-3">
      <h3 className="text-white text-3xl font-bold">Todo List:</h3>
      
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      
    </div>
  );
}

export default TodoItems;

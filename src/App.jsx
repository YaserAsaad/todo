import { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim() }]);
      setNewTodo("");
    }
  };

  return (
    <div className="flex justify-center flex-col py-24 px-32">
      <h1 className="text-4xl capitalize pb-4">to do list</h1>
      <div className="flex gap-4  ">
        <input
          className="text-2xl border border-black rounded-xl active:border-blue-500 capitalize  p-2"
          type="text"
          minLength={3}
          id="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add item"
        />

        {/* <button
          onClick={handleAddTodo}
          class="inline-block rounded-md w-fit text-center h-fit border border-indigo-600 bg-indigo-600 p-2 self-center cursor-pointer text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-2xl"
        >
          ADD
        </button> */}
        <CustomButton />
      </div>

      <ul className="py-4">
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" className="size-5" />
            <span className="px-4 text-2xl ">{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

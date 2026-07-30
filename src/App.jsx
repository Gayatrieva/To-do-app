import { useState, useEffect, useContext } from "react";
import { ListTodo, Sun, Moon } from "lucide-react";

import TodoItem from "./components/TodoItem";
import { ThemeContext } from "./components/context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [todos, setTodos] = useState([
    { id: 1, text: "Read the useEffect notes", completed: true },
    { id: 2, text: "Build this Todo app", completed: false },
    { id: 3, text: "Explain each concept out loud", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Todos Changed", todos);
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  }

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div
      className={`min-h-screen flex justify-center p-8 transition-all duration-300
      ${
        theme === "light"
          ? "bg-stone-50 text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="w-full max-w-md">

        <div className="flex justify-between items-center mb-5">

          <div className="flex items-center gap-2">
            <ListTodo size={24} />
            <h1 className="text-2xl font-bold">
              Todo List
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className="border rounded-lg p-2"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

        </div>

        <p className="mb-5">
          {completedCount} of {todos.length} completed
        </p>

        <form
          onSubmit={handleAddTodo}
          className="flex gap-2 mb-5"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value)
            }
            placeholder="Add Todo"
            className={`flex-1 border rounded-lg px-3 py-2
            ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-gray-800 text-white"
            }`}
          />

          <button
            className="bg-blue-500 text-white px-5 rounded-lg"
          >
            Add
          </button>
        </form>

        {todos.length === 0 ? (
          <div>No Todos</div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}
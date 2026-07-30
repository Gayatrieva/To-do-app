import { Trash2, CheckCircle2, Circle } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function TodoItem({ todo, onToggle, onDelete }) {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors
      ${
        theme === "light"
          ? "bg-white border-stone-200"
          : "bg-gray-800 border-gray-700 text-white"
      }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className="text-stone-400 hover:text-emerald-600"
      >
        {todo.completed ? (
          <CheckCircle2 size={22} className="text-emerald-600" />
        ) : (
          <Circle size={22} />
        )}
      </button>

      <span
        className={`flex-1 ${
          todo.completed
            ? "line-through text-gray-400"
            : theme === "light"
            ? "text-black"
            : "text-white"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}

export default TodoItem;
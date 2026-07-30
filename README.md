# Day 1 Todo App — React Practice Project

## How to run

1. Unzip this folder (or copy files into a folder called `todo-app`)
2. Open a terminal inside the folder
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`)
5. Open browser DevTools console (F12) to see the `useEffect` log fire as you interact with the app

## File structure

```
todo-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx           # React entry point
    ├── index.css          # Tailwind directives
    ├── App.jsx            # Parent component: state, form, useEffect, list rendering
    └── components/
        └── TodoItem.jsx   # Child component: props, events, conditional rendering
```

## Concepts demonstrated (Day 1)

- Components (App = parent, TodoItem = child)
- Props (todo, onToggle, onDelete passed down)
- State (useState for todos array and form input)
- Events (onClick, onChange, onSubmit)
- Conditional rendering (icons, strike-through text, empty state)
- Lists & keys (.map() with todo.id as key)
- Controlled form (input value tied to state)
- useEffect (logs todos array to console on every change)

## Things to try

- Change `key={todo.id}` to `key={index}` in App.jsx and observe subtle bugs after deleting items
- Remove `e.preventDefault()` from `handleAddTodo` and see the page refresh
- Add a `console.log` inside `handleToggle` to trace state updates step by step

import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

const STARTING_TASKS = [
  { id: 1, title: "Finish GT13", dueDate: "2026-10-21" },
  { id: 2, title: "Review React notes", dueDate: "2026-10-20" },
  { id: 3, title: "Open the Render address", dueDate: "2026-10-21" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: "No due date",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="tasks-page">
      <h1>Tasks</h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
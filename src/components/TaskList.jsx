function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span className="due-date">
            {task.dueDate ? task.dueDate.slice(0, 10) : "No due date"}
          </span> 
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
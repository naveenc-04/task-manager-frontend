import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../api/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => setTasks(await getTasks());

  useEffect(() => {
    loadTasks();
  }, []);

  const handleComplete = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Your Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task._id}
          className="
            bg-white/60 backdrop-blur-xl shadow-lg 
            border border-white/40 rounded-xl 
            p-5 mb-4 transition
          "
        >

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800">
            {task.title}
          </h3>

          {/* Priority Badge */}
          <span
            className={`
              inline-block mt-2 px-3 py-1 text-sm rounded-full 
              ${task.priority === "High" ? "bg-red-500 text-white" : ""}
              ${task.priority === "Medium" ? "bg-yellow-500 text-white" : ""}
              ${task.priority === "Low" ? "bg-green-500 text-white" : ""}
            `}
          >
            {task.priority}
          </span>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => handleComplete(task)}
              className={`
                px-4 py-2 rounded-lg text-white font-medium 
                ${task.completed ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"}
              `}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => handleDelete(task._id)}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium"
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

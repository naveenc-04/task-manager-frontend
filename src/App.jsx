import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { getTasks, createTask, deleteTask } from "./api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // fetch all tasks from backend
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  // run once when page loads
  useEffect(() => {
    fetchTasks();
  }, []);

  // add new task
  const handleAddTask = async (taskData) => {
    await createTask(taskData);
    fetchTasks(); // refresh list
  };

  // delete task
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks(); // refresh list
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 pt-28">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-sm border-b border-white/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-700">Task Manager</h1>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ADD TASK */}
        <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/40">
          <AddTask onAddTask={handleAddTask} />
        </div>

        {/* TASK LIST */}
        <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/40">
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </div>

      </div>
    </div>
  );
}

import { useState } from "react";
import { createTask } from "../api/tasks";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createTask({ title, priority, completed: false });
    setTitle("");
    setPriority("Low");

    window.location.reload(); // reload tasks after adding
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title Input */}
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Priority */}
        <select
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

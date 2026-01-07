import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    // send data to parent (App)
    onAddTask({
      title,
      priority,
      status: "Pending",
    });

    setTitle("");
    setPriority("Low");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="w-full border border-gray-300 rounded-lg p-3"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

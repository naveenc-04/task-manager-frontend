import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 pt-28">

      {/* NAVBAR — Glassmorphism */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-sm border-b border-white/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-700">Task Manager</h1>
        </div>
      </div>

      {/* LAYOUT GRID */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT PANEL */}
        <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/40">
          <AddTask />
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/40">
          <TaskList />
        </div>

      </div>
    </div>
  );
}

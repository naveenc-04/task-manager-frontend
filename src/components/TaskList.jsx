export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Your Tasks</h2>

      {tasks.length === 0 && (
        <p className="text-gray-600">No tasks yet.</p>
      )}

      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white/60 backdrop-blur-xl shadow-lg 
                     border border-white/40 rounded-xl 
                     p-5 mb-4"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800">
            {task.title}
          </h3>

          {/* Status */}
          <p className="mt-1 text-sm font-medium text-blue-700">
            Status: {task.status}
          </p>

          {/* Priority */}
          <span
            className={`inline-block mt-2 px-3 py-1 text-sm rounded-full text-white
              ${task.priority === "High" && "bg-red-500"}
              ${task.priority === "Medium" && "bg-yellow-500"}
              ${task.priority === "Low" && "bg-green-500"}
            `}
          >
            {task.priority}
          </span>

          {/* Delete Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => onDeleteTask(task._id)}
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

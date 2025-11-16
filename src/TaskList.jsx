import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/tasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const remove = async (id) => {
    await deleteTask(id);
    load();
  };

  return (
    <div>
      <h3>Your Tasks</h3>
      
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff"
          }}>
            <h4>{task.title}</h4>
            <p>Priority: <b>{task.priority}</b></p>
            
            <button 
              onClick={() => remove(task._id)}
              style={{
                padding: "6px 12px",
                background: "#ff4747",
                border: "none",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

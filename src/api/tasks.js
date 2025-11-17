const API_URL = `${import.meta.env.VITE_API_URL}/api/tasks`;

// Get all tasks
export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// Create a new task
export const createTask = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Update task
export const updateTask = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Delete task
export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

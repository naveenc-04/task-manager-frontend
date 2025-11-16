import React, { useEffect, useState } from "react";

const empty = { title: "", description: "", priority: "Medium" };

export default function TaskForm({ onAdd, editing, onUpdate, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (editing) setForm({
      title: editing.title || "",
      description: editing.description || "",
      priority: editing.priority || "Medium",
      completed: editing.completed || false,
      _id: editing._id || undefined
    });
    else setForm(empty);
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Title is required");
    if (form._id) {
      onUpdate(form._id, {
        title: form.title,
        description: form.description,
        priority: form.priority,
        completed: form.completed
      });
    } else {
      onAdd({
        title: form.title,
        description: form.description,
        priority: form.priority
      });
      setForm(empty);
    }
  };

  return (
    <div className="card">
      <h2>{form._id ? "Edit Task" : "New Task"}</h2>
      <form onSubmit={submit} className="task-form">
        <label>Title
          <input name="title" value={form.title} onChange={handleChange} />
        </label>

        <label>Description
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" />
        </label>

        <label>Priority
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <div className="form-actions">
          <button type="submit" className="btn primary">{form._id ? "Update" : "Add Task"}</button>
          {form._id && <button type="button" className="btn ghost" onClick={() => { onCancel(); setForm(empty); }}>Cancel</button>}
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={updatedTask.dueDate}
          onChange={handleChange}
          required
        />
        <select name="status" value={updatedTask.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="modal-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;

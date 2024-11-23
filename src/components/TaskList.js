import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskList = ({ setEditingTask }) => { // Accept setEditingTask prop
  const { tasks, deleteTask } = useContext(TaskContext);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => setEditingTask(task)}>Edit</button> {/* Use setEditingTask */}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;

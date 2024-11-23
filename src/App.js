import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { TaskProvider } from './context/TaskContext';
import './index.css';

const App = () => {
  const [editingTask, setEditingTask] = useState(null); // Add editing task state

  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList setEditingTask={setEditingTask} /> {/* Pass setEditingTask as a prop */}
        {editingTask && (
          <div>
            {/* Example modal content */}
            <p>Editing Task: {editingTask.title}</p>
          </div>
        )}
      </div>
    </TaskProvider>
  );
};

export default App;

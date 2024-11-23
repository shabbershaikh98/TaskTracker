import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskFilter = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="task-filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Due Date: Ascending</option>
        <option value="desc">Due Date: Descending</option>
      </select>
    </div>
  );
};

export default TaskFilter;

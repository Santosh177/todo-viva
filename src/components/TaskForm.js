// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ handleAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      handleAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

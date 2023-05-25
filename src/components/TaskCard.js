// TaskCard.js
import React, { useState } from 'react';

const TaskCard = ({ task, handleTaskUpdate, handleTaskDelete, handleMoveCard }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    if (title.trim() !== '') {
      handleTaskUpdate(task.id, title);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    handleTaskDelete(task.id);
  };

  const handleMove = (event) => {
    const newlistId = event.target.value;
    handleMoveCard(task.id, newlistId);
  };

  return (
    <div>
      {editing ? (
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <p>{task.title}</p>
      )}
      <button onClick={() => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
      <select value={task.listId} onChange={handleMove}>
        <option value="list1">List 1</option>
        <option value="list2">List 2</option>
        <option value="list3">List 3</option>
      </select>
    </div>
  );
};

export default TaskCard;

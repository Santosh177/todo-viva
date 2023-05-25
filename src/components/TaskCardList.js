// TaskCardList.js
import React from 'react';
import TaskCard from './TaskCard';

const TaskCardList = ({ tasks, handleTaskUpdate, handleTaskDelete, handleMoveCard }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          handleTaskUpdate={handleTaskUpdate}
          handleTaskDelete={handleTaskDelete}
          handleMoveCard={handleMoveCard}
        />
      ))}
    </div>
  );
};

export default TaskCardList;

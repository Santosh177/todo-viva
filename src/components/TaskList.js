// TaskList.js
import React from 'react';
import TaskCardList from './TaskCardList';

const TaskList = ({ lists, tasks, handleTaskUpdate, handleTaskDelete, handleMoveCard }) => {
  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>
          <h2>{list.name}</h2>
          <div>
            <TaskCardList
              tasks={tasks.filter((task) => task.listId === list.id)}
              handleTaskUpdate={handleTaskUpdate}
              handleTaskDelete={handleTaskDelete}
              handleMoveCard={handleMoveCard}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

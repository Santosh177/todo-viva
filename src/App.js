
import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Required for Excel export
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [lists, setLists] = useState([
    { id: 'list1', name: 'List 1' },
    { id: 'list2', name: 'List 2' },
    { id: 'list3', name: 'List 3' },
  ]);

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    const newTask = {
      id: `task${tasks.length + 1}`,
      title,
      listId: lists[0].id, // Add task to the first list by default
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdate = (taskId, title) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleMoveCard = (taskId, newListId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, listId: newListId };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'task-list.xlsx');
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        lists={lists}
        tasks={tasks}
        handleTaskUpdate={handleTaskUpdate}
        handleTaskDelete={handleTaskDelete}
        handleMoveCard={handleMoveCard}
      />
      <button onClick={handleExportToExcel}>Export to Excel</button>
    </div>
  );
};

export default App;


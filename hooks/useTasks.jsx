import { useState } from 'react';

function useTasks(initialState) {
  const [tasks, setTasks] = useState(initialState);

  const addTask = (inputValue) => {
    setTasks((prevValue) => {
      const maxID = Math.max(...prevValue.map((task) => task.id));
      return [...prevValue, {
        id: maxID + 1,
        title: inputValue,
        completed: false,
      }];
    });
  };

  const removeTask = (taskID) => {
    setTasks((prevValue) => {
      const taskIndex = prevValue.findIndex((t) => t.id === taskID);
      if (taskIndex !== -1) {
        const newTasks = [...prevValue];
        newTasks.splice(taskIndex, 1);
        return newTasks;
      }
      return prevValue;
    });
  };

  const toggleCompleteTask = (taskID) => {
    setTasks((prevValue) => {
      const taskIndex = prevValue.findIndex((t) => t.id === taskID);
      if (taskIndex !== -1) {
        const newTasks = [...prevValue];
        const updatedTask = {
          ...newTasks[taskIndex],
          completed: !newTasks[taskIndex].completed,
        };
        newTasks.splice(taskIndex, 1, updatedTask);
        return newTasks;
      }
      return prevValue;
    });
  };

  return [tasks, addTask, removeTask, toggleCompleteTask];
}

export default useTasks;

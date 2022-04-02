import { useState } from 'react'

import TaskInput from "./components/taskInput";
import TaskItem from "./components/taskItem";

import './styles/app.css'

export default function Todo() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    if (newTask !== "") {
      const addedTask = { description: newTask, completed: false }
      setTask([...task, addedTask]);
    }
  }

  const deleteTask = (selectedTask) => {
    const newTasks = task.filter((_, index) => index !== selectedTask);
    setTask(newTasks);
  }

  const completeTask = (selectedTask) => {
    const newTasks = task.map((task, index) => {
      if (index === selectedTask) {
        return {
          description: task.description,
          completed: !task.completed
        }
      }
      return task;
    });
    setTask(newTasks);
  }

  return (
    <section className="app">
      <p>📝</p>
      <h1>Todo List</h1>
      <TaskInput add={addTask} />
      <ul>
        {
          task.map((item, index) => (
            <TaskItem task={item} taskIndex={index} deleteTask={deleteTask} completeTask={completeTask} key={index} />
          ))
        }
      </ul>
    </section>
  );
}


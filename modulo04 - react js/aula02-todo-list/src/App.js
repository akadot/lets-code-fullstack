import { useState } from 'react'

import TaskInput from "./components/taskInput";
import TaskItem from "./components/taskItem";

import './styles/app.css'

export default function Todo() {
  const [task, setTask] = useState([]);

  const addTask = newTask => {
    setTask([...task, newTask]);
  }

  return (
    <section className="app">
      <p>📝</p>
      <h1>Todo List</h1>
      <TaskInput adicionar={addTask} />
      <ul>
        {
          task.map(item => (
            <TaskItem descricao={item} />
          ))
        }
      </ul>
    </section>
  );
}


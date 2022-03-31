import { useState } from 'react'
import TaskInput from "./components/taskInput";
import TaskItem from "./components/taskItem";

export default function Todo() {
  const [task, setTask] = useState([]);

  const addTask = newTask => {
    setTask([...task, newTask]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TaskInput adicionar={addTask} />
      <ul>
        {
          task.map(item => (
            <TaskItem descricao={item} checked={false} />
          ))
        }
      </ul>
    </>
  );
}


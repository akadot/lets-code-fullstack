import './taskInput.css';

import { useState } from 'react'
function TaskInput({ adicionar }) {
	const [task, setTask] = useState([]);

	const handleOnChange = (e) => {
		setTask(e.target.value);
	}
	const handleOnClick = () => {
		adicionar(task)
		setTask("")
	}

	return (
		<section className='input-container'>
			<input type="text" value={task} onChange={handleOnChange} placeholder="✍ Escreva uma tarefa..." />
			<button className="btn-add" onClick={handleOnClick}>+</button>
		</section>
	)
}

export default TaskInput
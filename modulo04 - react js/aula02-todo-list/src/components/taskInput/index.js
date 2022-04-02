import './taskInput.css';

import { useState } from 'react'
function TaskInput({ add }) {
	const [taskIput, setTaskInput] = useState([]);

	const handleOnChange = (e) => {
		setTaskInput(e.target.value);
	}

	const handleOnClick = () => {
		setTaskInput("")
		add(taskIput)
	}

	return (
		<section className='input-container'>
			<input type="text" value={taskIput} onChange={handleOnChange} placeholder="✍ Escreva uma tarefa..." />
			<button className="btn-add" onClick={handleOnClick}>+</button>
		</section>
	)
}

export default TaskInput
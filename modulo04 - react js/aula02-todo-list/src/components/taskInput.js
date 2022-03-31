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
		<>
			<input type="text" value={task} onChange={handleOnChange} />
			<button onClick={handleOnClick}>Adicionar Tarefa</button>
		</>
	)
}

export default TaskInput
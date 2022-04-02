import { useState } from "react";
import "./taskItem.css"

function TaskItem({ task, taskIndex, deleteTask, completeTask }) {

	const [icon, setIcon] = useState("✔")

	const handleCheck = (event) => {
		completeTask(taskIndex);
		const parent = event.target.parentElement;

		if (task.completed === true) {
			setIcon("↩");
			parent.style.filter = "grayscale(100%)";
		} else {
			setIcon("✔");
			parent.style.filter = "none";
		}
	}

	const handleDelete = () => {
		deleteTask(taskIndex)
	}

	return (
		<li>
			<span>{task.description}</span>
			<button className="btn-check" onClick={handleCheck}>{icon}</button>
			<button className="btn-delete" onClick={handleDelete}>✖</button>
		</li>
	);
}

export default TaskItem;

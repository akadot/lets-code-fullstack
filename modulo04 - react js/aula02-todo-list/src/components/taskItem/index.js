import "./taskItem.css"

function TaskItem({ task, taskIndex, deleteTask, completeTask }) {

	const handleCheck = (event) => {
		const element = event.target.parentElement;
		element.style.filter = "grayscale(100%)";
		const span = element.getElementsByTagName("span")
		span[0].style.textDecoration = "line-through";

		completeTask(taskIndex);
	}

	const handleDelete = () => {
		deleteTask(taskIndex)
	}

	return (
		<li>
			<span>{task.description}</span>
			<button className="btn-check" onClick={handleCheck}>✔</button>
			<button className="btn-delete" onClick={handleDelete}>✖</button>
		</li>
	);
}

export default TaskItem;

import "./taskItem.css"

function TaskItem({ descricao }) {

	const handleCheck = (event) => {
		const element = event.target.parentElement;
		element.style.filter = "grayscale(100%)";
		const span = element.getElementsByTagName("span")
		span[0].style.textDecoration = "line-through";
	}

	const handleDelete = (event) => {
		const parent = event.target.parentElement;
		parent.remove();
	}

	return (
		<li>
			<span>{descricao}</span>
			<button className="btn-check" onClick={handleCheck}>✔</button>
			<button className="btn-delete" onClick={handleDelete}>✖</button>
		</li>
	);
}

export default TaskItem;

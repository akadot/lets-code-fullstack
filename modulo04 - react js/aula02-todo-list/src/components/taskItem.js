function TaskItem({ descricao, checked }) {
	return (
		<li>
			<span>{descricao}  </span>
			<button>✅</button>
		</li>
	);
}

export default TaskItem;

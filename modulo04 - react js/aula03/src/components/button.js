export default function Button({ children, label }) {
	return (
		<button>
			{children}
			<br />
			<span>{label}</span>
		</button>
	)
}
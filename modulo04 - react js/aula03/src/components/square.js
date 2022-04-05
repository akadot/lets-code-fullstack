export default function Square({ children, color }) {
	return (
		<div style={{ width: "fit-content", padding: "10px", margin: "5px 0", backgroundColor: `${color}` }}>
			{children}
		</div>
	)
}
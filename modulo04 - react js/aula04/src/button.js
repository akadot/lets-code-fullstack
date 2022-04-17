import { useContext } from "react";
import { Theme } from "./theme-provider";

function Button() {
	const { theme, toggleTheme } = useContext(Theme);

	return (
		<button
			style={{
				padding: "1rem",
				backgroundColor: theme.background,
				color: theme.primary,
				fontWeight: "bold",
				fontSize: "1.5rem"
			}}
			onClick={toggleTheme}
		>
			Botão
		</button>
	);
}

export default Button;

import { useContext } from "react";

import Button from "./button";
import { Theme } from "./theme-provider";

function Login() {
	const { theme } = useContext(Theme);

	return (
		<section
			style={{
				height: "100%",
				width: "30%",
				border: "1px dotted red",
				backgroundColor: theme.primary
			}}
		>
			<h1 style={{ color: theme.background }}>Login</h1>
			<Button />
		</section>
	);
}

export default Login;

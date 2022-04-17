import Login from "./login";
import { Theme } from "./theme-provider";

function Header() {
	return (
		<Theme.Consumer>
			{({ theme }) => (
				<header
					style={{
						height: "30%",
						border: `5px solid ${theme.background}`
					}}
				>
					<Login />
				</header>
			)}
		</Theme.Consumer>
	);
}

export default Header;

import { useState } from 'react';
import '../styles/char.css'

export default function Char({ char }) {
	const [url, setUrl] = useState(char.idle);

	function handleForm(formURL) {
		setUrl(formURL);
	}
	return (
		<>
			<h2>{(char.name).toUpperCase()}</h2>
			<img src={url} alt="character" />
			<section className='btn-forms'>
				<button onClick={() => handleForm(char.idle)}>Forma Básica</button>
				{
					char.forms.map((item, index) => {
						return (
							<button onClick={() => handleForm(item)} key={index}>Forma {index + 1} </button>
						)
					})
				}
			</section>
		</>
	);
}
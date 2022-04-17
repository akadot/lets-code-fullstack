import { Link } from 'react-router-dom';

import './style.css';

function Character({ info, chooseChar }) {

	const resData = chooseChar(info);

	return (
		<Link to="/end" state={resData}>
			<section className='card-container' style={{ backgroundColor: info.color }} >
				<section className='img-container'>
					<img src={info.imgUrl} alt={info.name} />
					<p style={{ backgroundColor: info.color }}>{info.name}</p>
				</section>
			</section>
		</Link>
	);
}

export default Character;

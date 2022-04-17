import './style.css';

function Character({ info, chooseChar }) {

	return (
		<section className='card-container' style={{ backgroundColor: info.color }} onClick={() => chooseChar(info)}>
			<section className='img-container'>
				<img src={info.imgUrl} alt={info.name} />
				<p style={{ backgroundColor: info.color }}>{info.name}</p>
			</section>
		</section>
	);
}

export default Character;

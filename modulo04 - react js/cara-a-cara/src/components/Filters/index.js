import HairColor from "./HairColor";
import Occupation from "./Occupation";
import Specie from "./Specie";
import AkumaNoMi from "./AkumaNoMi";
import Weapon from "./Weapon";
import Origin from "./Origin";

import './style.css'

function Filters({ checkChar, reset }) {
	return (
		<section className="filters-container">
			<HairColor checkChar={checkChar} reset={reset} />
			<Occupation checkChar={checkChar} reset={reset} />
			<Specie checkChar={checkChar} reset={reset} />
			<Origin checkChar={checkChar} reset={reset} />
			<AkumaNoMi checkChar={checkChar} reset={reset} />
			<Weapon checkChar={checkChar} reset={reset} />
		</section>
	)
}

export default Filters;
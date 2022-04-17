import HairColor from "./HairColor";
import Occupation from "./Occupation";
import Specie from "./Specie";
import AkumaNoMi from "./AkumaNoMi";
import Weapon from "./Weapon";
import Origin from "./Origin";

import './style.css'

function Filters({ checkChar }) {
	return (
		<section className="filters-container">
			<HairColor checkChar={checkChar} />
			<Occupation checkChar={checkChar} />
			<Specie checkChar={checkChar} />
			<Origin checkChar={checkChar} />
			<AkumaNoMi checkChar={checkChar} />
			<Weapon checkChar={checkChar} />
		</section>
	)
}

export default Filters;
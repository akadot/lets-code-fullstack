// Chamadas assíncronas em sequência

// Utilizando somente callbacks
function asyncCallModel(message, time, callback = () => { }) {
	setTimeout(() => {
		console.log(message);
		callback();
	}, time);
}

const pedirPizza = asyncCallModel.bind(this, "Minha pizza está pronta.", 4000);
const comerPizza = asyncCallModel.bind(this, "Acabaram de comer. Vamos para o show.", 2000);
const viajarAteShow = asyncCallModel.bind(this, "Chegamos, vamos aproveitar o show!", 5000);
const ficarDoidaoNoShow = asyncCallModel.bind(this, "O show acabou, vamos embora!", 2000);
const irParaCasa = asyncCallModel.bind(this, "Cheguei em casa. A mimir...", 3000);

function pedirUber(destino, callback) {
	asyncCallModel(`O Uber chegou, vamos para ${destino}!`, 3000, callback);
}

// Callback HELL!!!!!!!
// pedirPizza(() => {
//     comerPizza(() => {
//         pedirUber("o show", () => {
//             viajarAteShow(() => {
//                 ficarDoidaoNoShow(() => {
//                     pedirUber("a casa", () => {
//                         irParaCasa();
//                     });
//                 });
//             });
//         });
//     });
// });

// Utilizando Promises
function asyncCallModelPromise(message, time) {
	return new Promise((resolve, reject) => {
		const erro = Math.random() > 0.7;
		if (erro) {
			reject("Deu ruim, abortar missão!");
			return;
		}
		setTimeout(() => {
			console.log(message);
			resolve();
		}, time);
	})
}

const pedirPizzaPromise = asyncCallModelPromise.bind(this, "Minha pizza está pronta.", 4000);
const comerPizzaPromise = asyncCallModelPromise.bind(this, "Acabaram de comer. Vamos para o show.", 2000);
const viajarAteShowPromise = asyncCallModelPromise.bind(this, "Chegamos, vamos aproveitar o show!", 5000);
const ficarDoidaoNoShowPromise = asyncCallModelPromise.bind(this, "O show acabou, vamos embora!", 2000);
const irParaCasaPromise = asyncCallModelPromise.bind(this, "Cheguei em casa. A mimir...", 3000);

function pedirUberPromise(destino) {
	return asyncCallModelPromise(`O Uber chegou, vamos para ${destino}!`, 3000);
}

// pedirPizzaPromise()
//     .then(() => comerPizzaPromise())
//     .then(()=> pedirUberPromise("o show"))
//     .then(() => viajarAteShowPromise())
//     .then(() => ficarDoidaoNoShowPromise())
//     .then(() => pedirUberPromise("a casita"))
//     .then(() => irParaCasaPromise())
//     .catch((erro) => console.error(erro));

// (async function runItinerary() {
//     try {
//         await pedirPizzaPromise();
//         await comerPizzaPromise();
//         await pedirUberPromise("o show");
//         await viajarAteShowPromise();
//         await ficarDoidaoNoShowPromise();
//         await pedirUberPromise("a casita");
//         await irParaCasaPromise();
//     } catch (erro) {
//         console.error(erro);
//     }
// })();

// runItinerary();

const fazerMassaDoBoloPromise = asyncCallModelPromise.bind(this, "Minha massa está pronta.", 5000);
const fazerCoberturaDoBoloPromise = asyncCallModelPromise.bind(this, "Minha cobertura está pronta.", 4000);
const fazerRecheioDoBoloPromise = asyncCallModelPromise.bind(this, "Meu recheio está pronto.", 6000);

// Promise.all([
//     fazerMassaDoBoloPromise(),
//     fazerCoberturaDoBoloPromise(),
//     fazerRecheioDoBoloPromise()
// ]).then((results) => console.log(results))
// .catch((erro) => console.error(erro));

const relampagoMarquinhosPromise = asyncCallModelPromise.bind(this, "Catchau!", 5000);
const dominicTorettoPromise = asyncCallModelPromise.bind(this, "It's all about family.", 4000);
const speedRacerPromise = asyncCallModelPromise.bind(this, "Speed Racer, GO!", 6000);

const MercurioPromise = asyncCallModelPromise.bind(this, "O da FOX ou o da Marvel?", 3000);
const TheFlashPromise = asyncCallModelPromise.bind(this, "Só o Flash...", 3000);
const SonicPromise = asyncCallModelPromise.bind(this, "Gotta go fast!", 2000);

// Promise.race([
//     relampagoMarquinhosPromise(),
//     dominicTorettoPromise(),
//     speedRacerPromise()
// ]).then(() => console.log("O vencedor foi o acima!"));


Promise.race([
	MercurioPromise(),
	TheFlashPromise(),
	SonicPromise()
]).then(() => console.log("O vencedor foi o acima!"))
	.catch(erro => console.error(erro));
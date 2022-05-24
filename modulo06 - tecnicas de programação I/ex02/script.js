//Callback Hell
function callbackModel(msg, time, callback = () => { }) {
	setTimeout(() => {
		console.log(msg)
		callback()
	}, time)
}

const tocarDespertador = callbackModel.bind(this, "* Ignorando o despertador *", 1000);
const desligarDespertador = callbackModel.bind(this, "Que droga, já deu hora.", 2000);
const lutarContraRealidade = callbackModel.bind(this, "Mas será que vale a apena acordar?", 3000);
const arrependimentoDiario = callbackModel.bind(this, "Krl, queria ser herdeiro.", 4000);
const finalmenteAcordar = callbackModel.bind(this, "Fazer o que né, hora de acordar.", 2000);
const tomarCafe = callbackModel.bind(this, "BOOOOORA POOOORRA! CAFÉ BOM DEMAIS.", 2000);

tocarDespertador(() => {
	desligarDespertador(() => {
		lutarContraRealidade(() => {
			arrependimentoDiario(() => {
				finalmenteAcordar(() => {
					tomarCafe();
				});
			});
		});
	});
});


//Promises
function promiseModel(msg, time, index = 0) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(msg);
			resolve(index);
		}, time);
	})
};

const tocarDespertadorPromise = promiseModel.bind(this, "* Ignorando o despertador *", 1000);
const desligarDespertadorPromise = promiseModel.bind(this, "Que droga, já deu hora.", 2000);
const lutarContraRealidadePromise = promiseModel.bind(this, "Mas será que vale a apena acordar?", 3000);
const arrependimentoDiarioPromise = promiseModel.bind(this, "Krl, queria ser herdeiro.", 4000);
const finalmenteAcordarPromise = promiseModel.bind(this, "Fazer o que né, hora de acordar.", 2000);
const tomarCafePromise = promiseModel.bind(this, "BOOOOORA POOOORRA! CAFÉ BOM DEMAIS.", 2000);

tocarDespertadorPromise()
	.then(() => desligarDespertadorPromise())
	.then(() => lutarContraRealidadePromise())
	.then(() => arrependimentoDiarioPromise())
	.then(() => finalmenteAcordarPromise())
	.then(() => tomarCafePromise())
	.catch((erro) => console.error(erro));


//Async/Await
(async function tryWakeUp() {
	try {
		await tocarDespertadorPromise();
		await desligarDespertadorPromise();
		await lutarContraRealidadePromise();
		await arrependimentoDiarioPromise();
		await finalmenteAcordarPromise();
		await tomarCafePromise();
	} catch (erro) {
		console.log(erro)
	}
})();


//Promise.all()
const P1 = promiseModel.bind(this, "Primeira Promise", 2000, 1);
const P2 = promiseModel.bind(this, "Segunda Promise", 5000, 2);
const P3 = promiseModel.bind(this, "Terceira Promise", 1000, 3);

Promise.all([P1(), P2(), P3()])
	.then((res) => console.log(`Ordem de Execução: ${res}`))
	.catch((error) => console.error(error));

//Promise.race
Promise.race([P1(), P2(), P3()])
	.then(() => console.log("Promise mais rápida acima."))
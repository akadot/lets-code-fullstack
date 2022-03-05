//se achar algum bug, é feature kkkkk
document.addEventListener("DOMContentLoaded", () => {

	const numbers = document.querySelectorAll(".numb");
	const operations = document.querySelectorAll(".op");

	const clear = document.querySelector(".clear");
	const equal = document.querySelector(".equal");
	const pi = document.querySelector(".pi");
	const sqrt = document.querySelector(".sqrt");
	const sen = document.querySelector(".sen");
	const cos = document.querySelector(".cos");

	const display = document.querySelector("#display");
	const currentOp = document.querySelector("#operation");
	const history = document.querySelector("#histList");

	let hist = [];
	let values = [];

	let operation = '';

	numbers.forEach(item => {
		item.addEventListener("click", () => {
			display.innerHTML = Number(display.innerHTML + item.innerHTML);
		});
	});

	operations.forEach(item => {
		item.addEventListener("click", () => {
			values.push(Number(display.innerHTML));
			operation = item.innerHTML;
			currentOp.innerHTML += display.innerHTML + item.innerHTML
			display.innerHTML = 0;
		});
	});

	clear.addEventListener("click", () => {
		display.innerHTML = 0;
		currentOp.innerHTML = '';
		values = [];
	});

	pi.addEventListener("click", () => {
		display.innerHTML = Number(display.innerHTML + Math.PI);
	});

	sqrt.addEventListener("click", () => {
		let numb1 = display.innerHTML
		let value = Math.sqrt(Number(display.innerHTML));

		display.innerHTML = value.toFixed(2);
		// display.innerHTML = 0; - limpando o display, impeço o uso de expressões
		updateHistory("", numb1, "√", value);
	});

	sen.addEventListener("click", () => {
		let numb1 = display.innerHTML
		let value = Math.sin(Number(display.innerHTML));

		display.innerHTML = value.toFixed(4);
		// display.innerHTML = 0; - limpando o display, impeço o uso de expressões
		updateHistory("", numb1, "sen", value);
	});

	cos.addEventListener("click", () => {
		let numb1 = display.innerHTML
		let value = Math.cos(Number(display.innerHTML));

		display.innerHTML = value.toFixed(4);
		// display.innerHTML = 0; - limpando o display, impeço o uso de expressões
		updateHistory("", numb1, "cos", value);
	});

	equal.addEventListener("click", () => {
		values.push(Number(display.innerHTML));

		currentOp.innerHTML += display.innerHTML;

		let res = getResult(values[0], values[1], operation);
		updateHistory(values[0], values[1], operation, res);

		display.innerHTML = res.toFixed(4);
		// display.innerHTML = 0; - limpando o display, impeço o uso de expressões
		values = [];
		currentOp.innerHTML = '';
	});

	function getResult(numb1, numb2, op) {
		let res;
		switch (op) {
			case '+':
				res = numb1 + numb2
				break;
			case '-':
				res = numb1 - numb2
				break;
			case 'x':
				res = numb1 * numb2
				break;
			case '÷':
				res = numb1 / numb2
				break;
			case '%':
				res = numb1 % numb2
				break;
			case '^':
				res = numb1 ** numb2
				break;

			default:
				break;
		}
		return res;
	}

	function updateHistory(numb1, numb2, op, res) {
		hist.push({
			val1: numb1,
			op: op,
			val2: numb2,
			result: res,
		})

		history.innerHTML = "";

		hist.forEach(item => {
			const histItem = document.createElement("p");
			histItem.innerHTML = `${item.val1} ${item.op} ${item.val2} = ${item.result}`;
			history.appendChild(histItem)
		})

	}
})
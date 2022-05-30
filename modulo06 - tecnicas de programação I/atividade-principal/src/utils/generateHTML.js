function generateHTML(data) {
	const billsList = (bill) => `
	</br>
	<li>
	ID: ${bill.id} </br>
	Nome: ${bill.name} </br>
	Valor: ${bill.value} </br>
	Vencimento: ${bill.expDate} </br>
	Descrição: ${bill.description} </br>
	<button onclick='deleteBills(${bill.id})'>Deletar ${bill.name}</button>
	</li>
	</br>
	`;
	return `
	<h1>Controle de Gastos</h1>
	<hr/>
	<section class='form add'>
	<h3>Adicionar Dívida</h3>
	<input type='text' id='name' placeholder='Nome da Dívida' required/>
	<input type='number' id='value' placeholder='Valor da Dívida' required/>
	<input type='date' id='expDate' placeholder='Data de Vencimento' required/>
	<input type='text' id='desc' placeholder='Descrição Curta'/>
	<button onclick='addBills()'>Adicionar</button>
	</section>
	<ul>
	${data.reduce((prev, curr) => {
		return prev + billsList(curr)
	}, "")
		}
	</ul>
	<br/>
	<hr/>
	<section class='form update'>
	<h3>Atualizar Dívida</h3>
	<input type='number' id='id' placeholder='ID da Dívida' required/>
	<input type='text' id='newName' placeholder='Novo Nome'/>
	<input type='number' id='newValue' placeholder='Novo Valor'/>
	<input type='date' id='newDate' placeholder='Nova Data'/>
	<input type='text' id='newDesc' placeholder='Nova Descrição'/>
	<button onclick='updateBills()'>Atualizar</button>
	</section>
	<script>
		${function addBills() {
			const name = document.querySelector("#name");
			const value = document.querySelector("#value");
			const date = document.querySelector("#expDate");
			const desc = document.querySelector("#desc");

			const data = {
				"name": name.value,
				"value": value.value,
				"expDate": date.value,
				"description": desc.value
			};

			fetch("http://127.0.0.1:8080/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}).catch(err => console.error("ADD ERROR: ", err));
		}}

		${function updateBills() {
			const id = document.querySelector("#id").value;
			const name = document.querySelector("#newName");
			const value = document.querySelector("#newValue");
			const date = document.querySelector("#newDate");
			const desc = document.querySelector("#newDesc");

			const data = {
				"id": id,
				"name": name.value,
				"value": value.value,
				"expDate": date.value,
				"description": desc.value
			};

			fetch("http://127.0.0.1:8080/", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}).catch(err => console.error("UPDATE ERROR: ", err))
		}}

		${function deleteBills(id) {
			const data = { "id": id };
			fetch("http://127.0.0.1:8080/", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}).catch(err => console.error("DELETE ERROR: ", err))
		}
		}
	</script >

	`;
}

module.exports = generateHTML;
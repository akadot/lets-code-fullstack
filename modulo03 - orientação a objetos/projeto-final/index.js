const Lojista = require("./controllers/lojista");
const Restaurante01 = new Lojista("Sabor 10", "0");

Restaurante01.adicionarAoCardapio("X-Salada");
console.log(Restaurante01.mostrarCardapio())

const Prato = require("./components/prato");
const xSalada = new Prato("X-Salada", 1);
const xBacon = new Prato("X-Bacon", 1);

const Cliente = require("./controllers/cliente");
const Roberto = new Cliente("Roberto", "12345678901", "Rua 1 - Número 2");

// console.log(Roberto)

// Roberto.adicionarAoCarrinho("aaa") //teste de erro
// Roberto.adicionarAoCarrinho(xBacon)
// Roberto.adicionarAoCarrinho(xBacon)
// Roberto.adicionarAoCarrinho(xBacon)
// Roberto.adicionarAoCarrinho(xSalada)
// console.log(Roberto.exibirCarrinho())
// Roberto.removerDoCarrinho(xBacon)
// Roberto.removerDoCarrinho("aaa")//teste de erro
// console.log(Roberto.exibirCarrinho())
// Roberto.adicionarAoCarrinho(xBacon)
// Roberto.adicionarAoCarrinho(xSalada)
// Roberto.alterarQuantidadeItem(xSalada, 4)
// console.log(Roberto.exibirCarrinho())
// Roberto.alterarQuantidadeItem(xSalada, -3)//teste de erro
// console.log(Roberto.exibirCarrinho())

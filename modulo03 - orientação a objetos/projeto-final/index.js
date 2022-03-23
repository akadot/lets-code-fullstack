const Lojista = require("./controllers/lojista");
const Restaurante01 = new Lojista("Sabor 10", "0");

Restaurante01.adicionarAoCardapio("X-Salada");
console.log(Restaurante01.mostrarCardapio())

const Prato = require("./components/prato");
const xSalada = new Prato("X-Salada", 1);
const xBacon = new Prato("X-Bacon", 1);

const Cliente = require("./controllers/cliente");
const Roberto = new Cliente("Roberto", "12345678901", "Rua 1 - Número 2");

Roberto.adicionarAoCarrinho(xSalada);
Roberto.adicionarAoCarrinho(xBacon);
Roberto.removerDoCarrinho(xBacon);
Roberto.exibirCarrinho();
Roberto.alterarQuantidadeItem(xSalada, 4);
Roberto.alterarQuantidadeItem(xSalada, 0);
Roberto.adicionarAoCarrinho(xSalada);
Roberto.adicionarAoCarrinho(xBacon);
Roberto.exibirCarrinho();

/**
 * Classe Carrinho com toda a lógica do carrinho, com funções estáticas
 * Classe Pedido com informações do restaurante, do cliente e do pedido
 * Usar as funções estáticas das duas classes para compor a classe Cliente
 * 
 */
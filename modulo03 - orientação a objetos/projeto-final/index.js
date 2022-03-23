const Lojista = require("./controllers/lojista");

const restaurante01 = new Lojista("Sabor 10", "0");

restaurante01.adicionarAoCardapio("X-Salada");
console.log(restaurante01.mostrarCardapio())

const Prato = require("./components/prato");
const xSalada = new Prato("X-Salada", 1);
const xBacon = new Prato("X-Bacon", 1);

const Cliente = require("./controllers/cliente");
<<<<<<< HEAD
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
=======
const roberto = new Cliente("Roberto", "12345678901", "Rua 1 - Número 2");

roberto.adicionarAoCarrinho(xSalada);
roberto.adicionarAoCarrinho(xBacon);
roberto.removerDoCarrinho(xBacon);
roberto.exibirCarrinho();
roberto.alterarQuantidadeItem(xSalada, 4);
roberto.alterarQuantidadeItem(xSalada, 0);
roberto.adicionarAoCarrinho(xSalada);
roberto.adicionarAoCarrinho(xBacon);
roberto.exibirCarrinho();










const Menu = require("./components/menu");
const ui = new Menu(roberto, restaurante01, undefined);

ui.run();
>>>>>>> refs/remotes/origin/master

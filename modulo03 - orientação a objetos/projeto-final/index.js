const Menu = require("./components/menu");
const Lojista = require("./controllers/lojista");
const Cliente = require("./controllers/cliente");
const Entregador = require("./controllers/entregador");

const restaurante01 = new Lojista("Sabor 10", "Não tem CNPJ, é tudo ilegal la.");
const roberto = new Cliente("Roberto", "12345678901", "Rua 1 - Número 2");
const claudio = new Entregador("Cláudio Makoto", "0", "Honda CG 160");

const ui = new Menu(roberto, restaurante01, claudio);

ui.run();

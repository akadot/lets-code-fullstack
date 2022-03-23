const Menu = require("./components/menu");
const Lojista = require("./controllers/lojista");
const Cliente = require("./controllers/cliente");
const Entregador = require("./controllers/entregador");

const restaurante01 = new Lojista("Sabor 10", "0");
const roberto = new Cliente("Roberto", "12345678901", "Rua 1 - Número 2");
const claudio = new Entregador("Cláudio Makoto", "Honda CG 160");

const ui = new Menu(roberto, restaurante01, claudio);

ui.run();

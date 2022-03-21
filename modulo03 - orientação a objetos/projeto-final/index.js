const Carrinho = require("./components/carrinho");
const Prato = require("./components/prato");

const xSalada = new Prato("X-Salada", 1);
const xBacon = new Prato("X-Bacon", 1);


// console.log(xSalada);
// console.log(xBacon);


const cart = new Carrinho([]);

console.log(cart)
cart.adicionarPrato("aaa") //teste de erro
cart.adicionarPrato(xBacon)
cart.adicionarPrato(xBacon)
cart.adicionarPrato(xBacon)
cart.adicionarPrato(xSalada)
console.log(cart.exibirPratos())
cart.removerPrato(xBacon)
cart.removerPrato("aaa")//teste de erro
console.log(cart.exibirPratos())
cart.adicionarPrato(xBacon)
cart.adicionarPrato(xSalada)
cart.alterarQuantidade(xSalada, 4)
console.log(cart.exibirPratos())
cart.alterarQuantidade(xSalada, -3)//teste de erro
console.log(cart.exibirPratos())
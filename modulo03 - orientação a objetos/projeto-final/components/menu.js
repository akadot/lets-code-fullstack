const readline = require('readline-sync');
const UserInterface = require("./userInterface");
const ItemCarrinho = require("./itemCarrinho");
const ItemCardapio = require('./itemCardapio');
const Pedido = require("./pedido");

class Menu extends UserInterface {
    constructor(cliente, lojista, entregador) {
        super(cliente, lojista, entregador);
    }


    run() {
        this.showOptions({
            title: "Login",
            question: "Logar como:",
            options: [
                {
                    optionText: "Cliente",
                    optionAction: () => this.#loadCliente()
                },
                {
                    optionText: "Lojista",
                    optionAction: () => this.#loadLojista()
                },
                {
                    optionText: "Entregador",
                    optionAction: () => this.#loadEntregador()
                },
                {
                    optionText: "Sair",
                    optionAction: () => false,
                },
            ]
        });
        console.clear();
    }

    #loadCliente() {
        return this.showOptions(
            {
                title: `Logado como cliente: ${this._cliente.nome}`,
                extraUi: () => {
                    console.log("\n****** Itens do Cardápio");
                    console.log("Codigo | Nome")
                    this._lojista.mostrarCardapio();
                    console.log("******\n");
                    console.log("****** Carrinho de Compras");
                    this._cliente.exibirCarrinho();
                    console.log("******\n");
                },
                question: "O que deseja fazer?",
                options: [
                    {
                        optionText: "Adicionar item ao carrinho",
                        optionAction: () => {
                            console.log("Adicionando item...");
                            let nomePrato = readline.question("Escreva o nome do item do cardápio:\n> ");
                            const item = this._lojista.cardapio.find(i => i.nome === nomePrato);
                            if (item) {
                                const resp = new ItemCarrinho(nomePrato, 1);
                                this._cliente.adicionarAoCarrinho(resp);
                            }
                            else {
                                console.log("Item não existe no cardápio.");
                                readline.question("pressione ENTER para continuar...");
                            }
                        },
                    },
                    {
                        optionText: "Editar item do carrinho",
                        optionAction: () => {
                            console.log("Editando item...");
                            let nome = readline.question("Escreva o nome do item a ser editado:\n> ");
                            let quantidade = readline.question("Insira a nova quantidade:\n> ");
                            const item = this._cliente.carrinho.find(i => i.nome === nome);
                            if (item) {
                                this._cliente.alterarQuantidadeItem(item, Number(quantidade));
                            }
                            else {
                                console.log("Item não existe no carrinho ou quantidade inválida.");
                                readline.question("pressione ENTER para continuar...");
                            }
                        }
                    },
                    {
                        optionText: "Remover item do carrinho",
                        optionAction: () => {
                            console.log("Removendo item...");
                            let respRemoveCarrinho = readline.question("Escreva o nome do item a ser removido:\n> ");
                            let itemCarrinho = this._cliente.carrinho.find(i => i.nome === respRemoveCarrinho);
                            if (itemCarrinho) {
                                this._cliente.removerDoCarrinho(itemCarrinho);
                            }
                            else {
                                console.log("Item não existe no carrinho");
                                readline.question("pressione ENTER para continuar...");
                            }
                        }
                    },
                    {
                        optionText: "Finalizar pedido",
                        optionAction: () => {
                            const pedidoFinalizado = new Pedido(this._cliente, this._lojista, this._cliente.carrinho, "Pendente");
                            console.log(`Pedido número ${pedidoFinalizado.id}:`);
                            console.log(`Cliente: ${pedidoFinalizado.cliente.nome} \nEndereço: ${pedidoFinalizado.cliente.endereco}`);
                            console.log(`Lojista: ${pedidoFinalizado.lojista.nome}`);
                            console.log('Detalhes do Pedido:');
                            pedidoFinalizado.detalhes.map(item => {
                                console.log(`-> (${item.quantidade}x) ${item.nome}\n`)
                            });
                            console.log(`Situação: ${pedidoFinalizado.estado}`)
                            this._cliente.finalizarPedido(pedidoFinalizado);
                            this._lojista.adicionarAosPedidos(pedidoFinalizado);
                            this._cliente.carrinho = [];
                            readline.question("pressione ENTER para continuar...");
                            return false;
                        }
                    },
                    {
                        optionText: "Cancelar carrinho",
                        optionAction: () => {
                            let confirmacao = readline.question("Quer mesmo zerar o carrinho de compras? [s/n]\n> ");
                            switch (confirmacao) {
                                case "s":
                                    this._cliente.carrinho = [];
                                    break;
                                default:
                                    break;
                            }
                        }
                    },
                    {
                        optionText: "Voltar",
                        optionAction: () => false
                    }
                ]
            }
        );
    }

    #loadLojista() {
        return this.showOptions(
            {
                title: `Logado como lojista: ${this._lojista.nome}`,
                extraUi: () => {
                    console.log("\n****** Itens atuais do cardápio");
                    console.log("Codigo | Nome")
                    this._lojista.mostrarCardapio();
                    console.log("******\n");
                },
                question: "O que deseja fazer?",
                options: [
                    {
                        optionText: "Adicionar item ao cardápio",
                        optionAction: () => {
                            console.log("Adicionando item...");
                            let nomePrato = readline.question("Escreva o nome do prato para adicionar:\n> ");
                            const item = this._lojista.cardapio.find(i => i.nome === nomePrato);
                            if (item) {
                                console.log("Item já existe no cardápio.");
                                readline.question("pressione ENTER para continuar...");
                            }
                            else {
                                const resp = new ItemCardapio(nomePrato);
                                this._lojista.adicionarAoCardapio(resp);
                            }
                        },
                    },
                    {
                        optionText: "Editar item do cardápio",
                        optionAction: () => {
                            console.log("Editando item...");
                            let itemAntigo = readline.question("Escreva o nome do prato a ser editado:\n> ");
                            let itemCardapio = this._lojista.cardapio.find(i => i.nome === itemAntigo);
                            if (itemCardapio) {
                                let itemNovo = readline.question("Escreva o nome do prato editado:\n> ");
                                const resp = new ItemCardapio(itemNovo);
                                this._lojista.editarDoCardapio(itemAntigo, resp);
                            }
                            else {
                                console.log("Item não existe no cardápio");
                                readline.question("pressione ENTER para continuar...");
                            }
                        }
                    },
                    {
                        optionText: "Remover item do cardápio",
                        optionAction: () => {
                            console.log("Removendo item...");
                            let respRemoveCardapio = readline.question("Escreva o nome do prato a ser removido:\n> ");
                            let itemCardapio = this._lojista.cardapio.find(i => i.nome === respRemoveCardapio);
                            if (itemCardapio) {
                                this._lojista.removerDoCardapio(itemCardapio);
                            }
                            else {
                                console.log("Item não existe no cardápio");
                                readline.question("pressione ENTER para continuar...");
                            }
                        }
                    },
                    {
                        optionText: "Voltar",
                        optionAction: () => false
                    }
                ]
            }
        );
    }
    #loadEntregador() {
        return this.showOptions({
            title: `Logado como entregador: ${this._entregador.nome}`,
            extraUi: () => {
                console.log("\n****** Pedidos prontos para entrega");
                this._lojista.mostrarPedidos();
                this._entregador.mostrarEntregas();
                console.log("******\n");
            },
            question: "O que deseja fazer?",
            options: [
                {
                    optionText: "Pegar pedido",
                    optionAction: () => {
                        console.log("Marcando pedido...");
                        let pedido = readline.question("Escreva o id do pedido:\n> ");
                        const item = this._lojista.pedidos.find(i => i.id === Number(pedido));
                        if (item) {
                            item.estado = "Em Curso"
                            console.log(`Pedido de ID: ${pedido} aceito.`)
                            this._entregador.marcarPedido(item);
                        }
                        else {
                            console.log("Pedido não existe na lista.");
                            readline.question("pressione ENTER para continuar...");
                        }
                    },
                },
                {
                    optionText: "Entregar pedido",
                    optionAction: () => {
                        console.log("Entregando pedido...");
                        let pedido = readline.question("Escreva o id do pedido entregue:\n> ");
                        const item = this._entregador.pedidosEmCurso.find(i => i.id === Number(pedido));
                        if (item) {
                            item.estado = "Entregue"
                            console.log(`Pedido de ID: ${pedido} entregue.`)
                            this._entregador.entregarPedido(item);
                        }
                        else {
                            console.log("Pedido não existe na lista.");
                            readline.question("pressione ENTER para continuar...");
                        }
                    },
                },
                {
                    optionText: "Voltar",
                    optionAction: () => false
                }
            ]
        });
    }
}

module.exports = Menu;
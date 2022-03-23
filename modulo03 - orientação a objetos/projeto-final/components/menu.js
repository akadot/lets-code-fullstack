const readline = require('readline-sync');
const UserInterface = require("./userInterface");
const Prato = require("./prato");

class Menu extends UserInterface {
    constructor(cliente, logista, entregador){
        super(cliente, logista, entregador);
    }

    
    run(){
        this.showOptions({
            title: "Login",
            question: "Logar como:",
            options: [
                {
                    optionText: "Cliente",
                    optionAction: () => this.#loadCliente()
                },
                {
                    optionText: "Logista",
                    optionAction: () => this.#loadLogista()
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
                    console.log(this._logista.mostrarCardapio())
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
                            let respAddCarrinho = readline.question("Escreva o nome do item do cardápio:\n> ");
                            if(this._logista.cardapio.includes(respAddCarrinho)){
                                const resp = new Prato(respAddCarrinho, 1);
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
                            if(item){
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
                            if(itemCarrinho){
                                this._cliente.removerDoCarrinho(itemCarrinho);
                            }
                            else {
                                console.log("Item não existe no carrinho");
                                readline.question("pressione ENTER para continuar...");                            
                            }
                        }
                    },
                    {
                        optionText: "Fazer pedido",
                        optionAction: () => {
                            console.log("não implementado...");
                            readline.question("pressione ENTER para continuar...");
                        }
                    },
                    {
                        optionText: "Cancelar carrinho",
                        optionAction: () => {
                            let confirmacao = readline.question("Quer mesmo zerar o carrinho de compras? [s/n]\n> ");
                            switch(confirmacao) {
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

    #loadLogista() {
        console.log("ainda não implementado");
        readline.question("pressione ENTER para continuar...");
    }    
    #loadEntregador() {
        console.log("ainda não implementado");
        readline.question("pressione ENTER para continuar...");
    }    
}

module.exports = Menu;
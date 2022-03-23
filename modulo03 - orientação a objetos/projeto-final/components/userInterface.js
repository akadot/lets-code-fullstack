const readline = require('readline-sync');

class UserInterface {
    _cliente
    _logista
    _entregador
    constructor(cliente, logista, entregador){
        this._cliente = cliente;
        this._logista = logista;
        this._entregador = entregador;
    }

    run() {
        console.log("Polimorfismo dinâmico, uau!");
    }

    showOptions(obj) {
        let loop = true;
        while(loop){
            console.clear();
            console.log("****** AppFood Pedidos ******");
            console.log(`****** ${obj.title} ******`);
            obj.extraUi
                ? obj.extraUi()
                : console.log("");

            let choices = "";
            for(let i = 0; i < obj.options.length; i++) {
                choices = choices + `[${i + 1}] ${obj.options[i].optionText}\n`;
            }
            let resp = readline.question(`${obj.question}\n` + choices + "> ");
            resp = Number(resp - 1);

            loop = obj.options[(resp)]?.optionAction() ?? true;
        }
    }

    // getters sem setters tornam nossos atributos "Read Only"!
    get _cliente() {
        return this._cliente;
    }
    get _logista() {
        return this._logista;
    }
    get _entregador() {
        return this.entregador;
    }
}

module.exports = UserInterface;
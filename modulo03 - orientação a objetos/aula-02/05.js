const Cliente = require("./04");

class ContaCorrente {
  constructor(cliente, saldo) {
    this.cliente = cliente;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (this.validarValor(valor)) {
      this.saldo += +valor;
      this.consultarSaldo();
    }
  }

  sacar(valor) {
    if (this.validarValor(valor)) {
      if (valor <= this.saldo) {
        this.saldo -= +valor;
        this.consultarSaldo();
      } else {
        console.log("Não foi possível realizar o saque. Saldo insuficiente.");
      }
    }
  }

  transferir(conta, valor) {
    if (this.validarValor(valor)) {
      if (valor <= this.saldo) {
        this.saldo -= +valor;
        console.log(
          `A transferência de ${valor.toFixed(
            2
          )} para a conta ${conta} foi realizada com sucesso`
        );
        this.consultarSaldo();
      } else {
        console.log(
          "Não foi possível realizar a transferência. Saldo insuficiente."
        );
      }
    }
  }

  receberTransferencia(conta, valor) {
    if (this.validarValor(valor)) {
      this.saldo += valor;
      console.log(
        `Você acaba de receber ${valor.toFixed(2)} da conta ${conta}`
      );
      this.consultarSaldo();
    }
  }

  consultarSaldo() {
    console.log(`O saldo atual é de ${this.saldo.toFixed(2)}`);
  }

  validarValor(valor) {
    if (!isNaN(valor) && valor > 0) {
      return true;
    }

    return false;
  }
}

const cliente1 = new Cliente("Fulano", 18, "fulano@email.com");
const contaCorrente = new ContaCorrente(cliente1, 1000);

// contaCorrente.depositar("125");
// contaCorrente.sacar(1010);
// contaCorrente.transferir(288544, 500);
contaCorrente.receberTransferencia(12345, 2500);
console.log(contaCorrente);

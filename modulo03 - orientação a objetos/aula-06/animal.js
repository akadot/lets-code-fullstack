class Animal {
  #tipo;
  constructor(nome, especie, tipo) {
    this.nome = nome;
    this.especie = especie;
    this.#tipo = tipo;
  }

  get tipo() {
    return this.#tipo;
  }

  set tipo(valor) {
    if (
      isNaN(valor) &&
      (valor === "Terrestre" || valor === "Aquático" || valor === "Aéreo")
    ) {
      this.#tipo = valor;
    } else {
      console.log(
        "O tipo do animal não pode ser um número e precisa ser Terrestre, Aquático ou Aéreo"
      );
    }
  }
}

const a1 = new Animal("Tóto", "Cachorro", "Terrestre");
// console.log(a1.nome)
// console.log(a1.especie);

a1.tipo = "Tipo";
console.log(a1.tipo);

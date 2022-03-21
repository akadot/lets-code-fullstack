class Canal {
  constructor(emissora, numero) {
    this.emissora = emissora;
    this.numero = numero;
  }
}

class Televisor {
  constructor(fabricante, modelo, canalAtual, listaCanais, volume) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.listaCanais = listaCanais;
    this.canalAtual = this.verificaCanalExiste(canalAtual)
      ? canalAtual
      : this.listaCanais[0].numero;

    if (!volume || isNaN(volume) || volume < 0 || volume > 100) {
      this.volume = 0;
      return;
    }

    this.volume = volume;
  }

  aumentarVolume() {
    if (this.volume < 100) {
      this.volume++;
    }
  }

  diminuirVolume() {
    if (this.volume > 0) {
      this.volume--;
    }
  }

  trocarCanal(numeroCanal) {
    if (this.verificaCanalExiste(numeroCanal)) {
      this.canalAtual = numeroCanal;
    }
  }

  sintonizarCanal(canal) {
    if (!this.verificaCanalExiste(canal.numero)) {
      this.listaCanais.push(canal);
    } else {
      console.log(
        `${canal.emissora}, canal ${canal.numero} já estava na lista de canais`
      );
    }
  }

  verificaCanalExiste(numeroCanal) {
    return this.listaCanais.some((element) => element.numero === numeroCanal);
  }
}

const sbt = new Canal("SBT", 4);
const globo = new Canal("Globo", 11);
const band = new Canal("Band", 7);
const record = new Canal("Record", 5);

const televisor = new Televisor("CCE", "TFCV588", 7, [sbt, globo, band], 15);
televisor.sintonizarCanal(globo);
televisor.trocarCanal(5);
console.log(televisor);

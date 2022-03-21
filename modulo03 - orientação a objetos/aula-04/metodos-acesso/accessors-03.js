/* 
  Getters e Setters
  Object.defineProperty()
*/
const usuario = {
  _nome: "Fernanda Lima",
  getNome: function () {
    return this._nome;
  },
};

Object.defineProperty(usuario, "nome", {
  get: function () {
    return this._nome;
  },
  set: function (valor) {
    this._nome = valor;
  },
});

usuario.nome = "Andrea Lima";
console.log(usuario.nome);

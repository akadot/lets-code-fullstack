const DescontoFolha = require("./descontosFolha");
const BeneficiosFolha = require("./beneficiosFolha");
const Vendedor = require("./vendedor");
const Estagiario = require("./estagiario");
const Vigilante = require("./vigilante");

// DESCONTOS
const inss = new DescontoFolha("INSS", 11);
const alimentacao = new DescontoFolha("Alimentação", 3);
const transporte = new DescontoFolha("Transporte", 6);
const planoSaude = new DescontoFolha("Plano de Saúde", 4)


// Benefícios
const plr = new BeneficiosFolha("PLR", 18000);
const gympass = new BeneficiosFolha("Gympass", 50);
const alelo = new BeneficiosFolha("Alimentação", 500);

// FUNCIONÁRIOS
const vendedor = new Vendedor(1, "Zé", "00000000", "26-06-1996", 2500, [], [], [2500, 6000, 500, 12899]);
const estagiario = new Estagiario(2, "Roger", "1111111", "12-01-2006", 800, [], [], 20);
const vigilante = new Vigilante(3, "Cléber", "22222", "25-08-1985", 2000, [], "Orbenk", "12/36", 45)

// VENDEDOR
vendedor.adicionarDesconto(inss);
vendedor.adicionarDesconto(alimentacao);
vendedor.adicionarDesconto(planoSaude);
vendedor.adicionaBeneficio(plr);
vendedor.adicionaBeneficio(gympass);
vendedor.adicionaBeneficio(alelo);
vendedor.calcSalario();
vendedor.calcFerias();
vendedor.calcVendas();
vendedor.calcComissao();

console.log(" ");
console.log("----VENDEDOR----");
console.log(`Salario: ${vendedor.salario.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);
console.log(`Ferias: ${vendedor.ferias.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);
console.log(`Total de Vendas: ${vendedor.totalVendas}`);
console.log(`Comissão: ${vendedor.comissao}`);

// ESTAGIÁRIO
estagiario.adicionarDesconto(inss);
estagiario.adicionaBeneficio(alelo);
estagiario.calcSalario();
estagiario.calcFerias();

console.log(" ");
console.log("----ESTAGIÁRIO----");
console.log(`Salario: ${estagiario.salario.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);
console.log(`Ferias: ${estagiario.ferias.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);

// VIGILANTE
vigilante.adicionarDesconto(inss);
vigilante.adicionarDesconto(alimentacao);
vigilante.adicionarDesconto(transporte);
vigilante.calcSalario();
vigilante.calcFerias();

console.log(" ");
console.log("----VIGILANTE----");
console.log(`Salario: ${vigilante.salario.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);
console.log(`Ferias: ${vigilante.ferias.toLocaleString("pt-BR", {
	maximumFractionDigits: 2,
	style: "currency",
	currency: "BRL",
	useGrouping: true,
})}`);
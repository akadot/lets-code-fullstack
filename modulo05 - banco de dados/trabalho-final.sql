-- Enunciado
-- Você está criando um sistema de transferências simples para uma instituição financeira e deverá modelar o banco de dados.

-- Você precisa salvar os dados da conta do cliente, como número da conta, saldo, agência, cpf, nome, email, senha, data de nascimento, etc...

-- A agência deverá vir de outra tabela, para podermos fazer consultas depois.

-- Deve haver o registro das transações contendo o id da conta de origem e destino, data e o valor transferido.

-- Lembre-se de criar índices...

-- Preencha com alguns dados de teste... Agora você deverá gerar algumas consultas:

-- 1) Crie uma view que mostre o saldo total por agência;

-- 2) Crie uma view que liste todas as transferências mostrando agencia e numero das contas de origem e destino, a data no formato DD/MM/YYYY e o valor total;

-- 3) Crie uma procedure que receba os Ids das contas de origem e destino e o valor transferido e atualize os saldos das mesmas;

-- 4) Crie uma view que liste todas as contas, a quantidade de transações já realizadas, o total de valor já enviado e o total de valor já recebido

create database BancoX;

create table Agencia(
	id int generated always as identity,
	codigo varchar(5) not null,
	primary key(id)
);

create table Cliente(
	id int generated always as identity,
	nome varchar(60) not null,
	cpf varchar(11) not null,
	email varchar(30) not null,
	senha varchar(60) not null,
	dtNasc date not null,
	conta varchar(10) not null,
	agencia varchar(5) not null,
	saldo decimal(10,2),
	primary key(id),
	constraint FK_Cliente_Agencia foreign key(agencia) references agencia(codigo)
);

create table Transacoes(


);
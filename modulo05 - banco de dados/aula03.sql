-- RELACIONAMENTOS E RESTRIÇÕES (constraints)

-- para relacionamentos, criar  atabela a sr relacionada primeiro
create table estado(
	id int generated always as identity,
	nome varchar(40) not null,
	uf varchar(2) not null,
	primary key(id)
);

insert into estado(nome, uf) 
values('São Paulo', 'SP'),
('Rio de Janeiro', 'RJ');

select * from estado

create table cidade(
	id int generated always as identity,
	nome varchar(40) not null,
	estadoId int not null, --chave estrangeira
	primary key(id),
	constraint FK_cidade_estado foreign key(estadoId) references estado(id) -- crie uma restrição, coloque uma chave estrangeira no estadoId e referencie a tabela estado na coluna id
);

insert into cidade(nome, estadoId) 
values('Santos', 1),
('Rio de Janeiro', 2);

select * from cidade

-- Relacionar tabelas após a criação, sem alterar os dados

-- Criar a coluna
ALTER TABLE estado ADD COLUMN paisId int not null DEFAULT 1;

-- ou
UPDATE estado set paisId = 1 where paisId is null;
ALTER TABLE estado ALTER COLUMN paisId SET not null;

-- Criar a constraint
ALTER TABLE estado ADD CONSTRAINT FK_estado_pais foreign key(paisId) references pais(id);


-- RELACIONAMENTOS AVANÇADOS (de N para N)

CREATE TABLE produto(
	id int generated always as identity,
	nome varchar(100) not null,
	PRIMARY KEY(id)
);

CREATE TABLE cliente(
	id int generated always as identity,
	nome varchar(100) not null,
	PRIMARY KEY(id)
);

CREATE TABLE devolucao(
	id int generated always as identity,
	motivo varchar(100) not null,
	PRIMARY KEY(id)
);

CREATE TABLE compra(
	id int generated always as identity,
	clienteId int not null,
	motivoDevolucao int,
	PRIMARY KEY(id),
	CONSTRAINT FK_cliente_compra foreign key(clienteId) references cliente(id), -- relacionamento simples (1-N ou N-1)
	CONSTRAINT FK_devolucao_compra foreign key(motivoDevolucao) references devolucao(id)
);

-- criando uma tabela para transformar N-N em vários N-1
CREATE TABLE compraProduto(
	compraId int not null,
	produtoId int not null,
	qtd decimal(10,2) not null,
	PRIMARY KEY(compraId, produtoId), -- chave primária composta
	CONSTRAINT FK_compra_compraProduto FOREIGN KEY(compraId) REFERENCES compra(id),
	CONSTRAINT FK_produto_compraProduto FOREIGN KEY(produtoId) REFERENCES produto(id)
);

CREATE TABLE nfe(
	id int generated always as identity,
	PRIMARY KEY(id)
);

CREATE TABLE nfeItens(
	nfeId int not null,
	compraId int not null,
	produtoId int not null,
	PRIMARY KEY(nfeId, compraId, produtoId),
	CONSTRAINT FK_nfe_nfeItens FOREIGN KEY(nfeId) REFERENCES nfe(id),
	CONSTRAINT FK_compraProduto_nfeItens FOREIGN KEY(compraId, produtoId) REFERENCES compraProduto(compraId, produtoId)
);
-- Enunciado
-- Crie um banco para modelar o seguinte cenário:

-- Você está desenvolvendo o sistema de controle de usuário de uma empresa. Os usuário possuem cpf, nome, e-mail e data nascimento para poderem ser cadastrados. Além disso quando você cria um usuário, é enviado um e-mail de confirmação e você deve saber se o usuário o validou.

-- Cada usuário faz parte de um departamento (exemplo financeiro, jurídico, etc). Cada departamento tem suas respectivas restrições de acesso para funcionalidades do sistema. Exemplo: o departamento jurídico não pode visualizar os módulos Financeiro, Contabilidade e Vendas.

-- Para isto deve haver uma forma de relacionar os departamentos com os módulos que cada um tem acesso.

-- Você deve mapear e criar as relações necessárias para que as informações mantenham a integridade referencial no seu banco.

CREATE DATABASE Empresa;

CREATE TABLE Modulo(
	id int generated always as identity,
	nome varchar(30) not null,
	descricao varchar(255),
	PRIMARY KEY(id)
);

CREATE TABLE Departamento(
	id int generated always as identity,
	nome varchar(30) not null,
	PRIMARY KEY(id)
);

CREATE TABLE Restricao(
	moduloId int not null,
	departamentoId int not null,
	PRIMARY KEY(moduloId, departamentoId),
	CONSTRAINT FK_Modulo_Departamento FOREIGN KEY(moduloId) REFERENCES Modulo(id),
	CONSTRAINT FK_Restricao_Departamento FOREIGN KEY(departamentoId) REFERENCES Departamento(id)
);

CREATE TABLE Usuario(
	id int generated always as identity,
	nome varchar(60) not null,
	cpf varchar(11) not null,
	email varchar(60) not null,
	senha varchar(500) not null,
	dtNasc date not null,
	departamentoId int not null,
	validaEmail boolean not null default FALSE,
	excluido boolean not null default FALSE,
	PRIMARY KEY(id),
	CONSTRAINT FK_Usuario_Departamento FOREIGN KEY(departamentoId) REFERENCES Departamento(id)
);

INSERT INTO Departamento VALUES ('Vendas'), ('Contabilidade'), ('Financeiro');

INSERT INTO Modulo VALUES ('Vendas'), ('Contabilidade'), ('Financeiro'), ('Estoque'), ('NFE');

INSERT INTO Restricao(moduloId, departamentoId) VALUES ((SELECT id FROM Modulo WHERE nome = 'Vendas'), (SELECT id FROM Departamento WHERE nome = 'Vendas'));

INSERT INTO Usuario(nome, cpf, email, senha, dtNasc, departamentoId) VALUES ('Et Bilu', '12345678901','etbilu@alienmail.com', 'BusquemConhecimentoHashCode', '2010-01-01', (SELECT id FROM Departamento WHERE nome = 'Financeiro'));

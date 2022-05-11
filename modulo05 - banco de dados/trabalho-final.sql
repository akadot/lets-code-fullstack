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


--Modelando o Banco
create database BancoX;

create table Agencia(
	codigo varchar(4),
	primary key(codigo)
);

create table Cliente(
	id int generated always as identity,
	nome varchar(60) not null,
	cpf varchar(11) not null unique,
	email varchar(60) not null,
	senha varchar(60) not null,
	dtNasc date not null,
	conta varchar(8) not null,
	agencia varchar(4) not null,
	saldo decimal(10,2),
	primary key(id),
	constraint FK_Cliente_Agencia foreign key(agencia) references agencia(codigo)
);

create table Transacoes(
	id int generated always as identity,
	origem int not null,
	destino int not null,
	dtTransf date not null,
	valor decimal(10,2) not null,
	primary key(id),
	constraint FK_Transacao_Cliente_Origem foreign key(origem) references Cliente(id),
	constraint FK_Transacao_Cliente_Destino foreign key(destino) references Cliente(id)
);

create index IX_Cliente_Agencia on Cliente(agencia);
create index IX_Transacao_Cliente_Origem_Destino on Transacoes(origem,destino);

--Adicionando Agências
insert into Agencia(codigo) values('0001'),('0023'),('0009'),('0136');

--Adicionando Clientes
insert into Cliente(nome, cpf, email, senha, dtNasc, conta, agencia, saldo)
values ('Zumiro Alves', '01234567890', 'zumiro_zika@gmail.com', 'senha@01', '1979-05-02', '01234567',(select codigo from Agencia where codigo = '0009'), 1000.50);

insert into Cliente(nome, cpf, email, senha, dtNasc, conta, agencia, saldo)
values ('Jeka Silva', '12345678901', 'jeka@gmail.com', 'senha@02', '1979-06-18', '00351234',(select codigo from Agencia where codigo = '0009'), 10.50);

insert into Cliente(nome, cpf, email, senha, dtNasc, conta, agencia, saldo)
values ('Craudemir Alves', '23456789012', 'crau@gmail.com', 'senha@21', '1982-01-10', '22567333',(select codigo from Agencia where codigo = '0023'), 100000.00);

insert into Cliente(nome, cpf, email, senha, dtNasc, conta, agencia, saldo)
values ('Waldir Alves', '01456789012', 'wal@gmail.com', 'senha', '1988-01-10', '00007333',(select codigo from Agencia where codigo = '0136'), 100.00);

insert into Cliente(nome, cpf, email, senha, dtNasc, conta, agencia, saldo)
values ('Virso Fiorentin', '01450192012', 'virso@gmail.com', 'virso', '1988-01-10', '02007388',(select codigo from Agencia where codigo = '0001'), 235.60);

--Fazendo Transações
insert into Transacoes(origem, destino, dtTransf, valor) 
values ((select id from Cliente WHERE cpf = '01456789012'),(select id from Cliente WHERE cpf = '12345678901'),'2022-05-10',100.00);

insert into Transacoes(origem, destino, dtTransf, valor) 
values ((select id from Cliente WHERE cpf = '01450192012'),(select id from Cliente WHERE cpf = '01234567890'),'2002-08-11',1.50);

insert into Transacoes(origem, destino, dtTransf, valor) 
values ((select id from Cliente WHERE cpf = '23456789012'),(select id from Cliente WHERE cpf = '01456789012'),'2016-11-20',1000.00);

--Consultas

--1:
create view vw_saldo_agencia as
select ag.codigo as Agencia, sum(cl.saldo) as Saldo_Total from Agencia as ag
left join Cliente as cl on ag.codigo = cl.agencia
group by ag.codigo

select * from vw_saldo_agencia

--2:
create or replace view vw_transacoes as
select  clo.agencia as Agencia_Origem, clo.conta as Conta_Origem, cld.agencia as Agencia_Destino, cld.conta as Conta_Destino, to_char(tr.dttransf, 'DD/MM/YYYY') as Data_Transf, tr.valor from Transacoes as tr
inner join Cliente as clo on tr.origem = clo.id
inner join Cliente as cld on tr.destino = cld.id

select * from vw_transacoes

--3:
create procedure sp_atualizaSaldo(idOrigem int, idDestino int, valorTransf decimal)
language plpgsql
as $$
begin
	update cliente set saldo = saldo - valorTransf where id = idOrigem;
	update cliente set saldo = saldo + valorTransf where id = idDestino;
end; $$

call sp_atualizaSaldo(1,2,100);

--4:
create or replace view vw_conta_transacao as
select cl.conta, sum(tre.valor) as Valor_Enviado, sum(trr.valor) as Valor_Recebido, count(*) as Qtd_Transf from cliente as cl
left join transacoes as tre on cl.id = tre.origem
left join transacoes trr on cl.id = trr.destino 
group by cl.conta

select * from vw_conta_transacao
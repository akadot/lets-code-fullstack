-- SQL Introduction (Postgres)

-- DDL Data Definition Language (CREATE/DROP/ALTER) 
-- DATABASES
create database LETSCODE with encoding = 'UTF-8'

drop database LETSCODE

-- TABLES
create table CIDADE (
	id int primary key,
	nome varchar(60) not null,
)

drop table CIDADE

alter table CIDADE alter column nome type varchar(60) -- altera o nome, limitando à 60 caracteres
alter table CIDADE alter column nome set not null -- altera o nome, dizendo que ela não pode ser nula

-- DML Data Manipulate Language (INSERT/UPDATE/DELETE)
-- INSERT 
insert into CIDADE (id, nome) values (1, 'Descalvado') -- aspas simples sempre
insert into CIDADE (id, nome) values (2, null) -- nome não é not null
insert into CIDADE (id, nome) values (3) -- erro
insert into CIDADE (id) values (4) -- ok, nome == null

insert into CIDADE values (5, 'São Carlos') -- ok
insert into CIDADE values (6, 'São Paulo'), (7, 'Rio de Janeiro') -- multiplos valores

-- UPDATE
update CIDADE set nome = 'Cuiabá' where id = 1
update CIDADE set nome = '' where nome is null -- trocar nulos por vazios (= é is para nulo)

--DELETE
delete from CIDADE where id = 2

--DQL Data Query Language (SELECT)
-- SELECT 
select * from CIDADE
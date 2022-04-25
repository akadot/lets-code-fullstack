-- SQL Introduction (Postgres)


-- CREATE/DROP/ALTER (DDL Data Definition Language)
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


-- INSERT (DML Data Manipulate Language)
insert into CIDADE (id, nome) values (1, 'Descalvado') -- aspas simples sempre
insert into CIDADE (id, nome) values (2, null) -- nome não é not null
insert into CIDADE (id, nome) values (3) -- erro
insert into CIDADE (id) values (4) -- ok, nome == null

insert into CIDADE values (5, 'São Carlos') -- ok
insert into CIDADE values (6, 'São Paulo'), (7, 'Rio de Janeiro') -- multiplos valores

update CIDADE set nome = 'Cuiabá' where id = 1


-- SELECT (DQL Data Query Language)
select * from CIDADE
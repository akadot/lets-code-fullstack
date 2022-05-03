-- USANDO AS TABELAS DE PRODUTOS DO EXERCÍCIO 02 - PARTE 02
-- Alimentando Banco

alter table Produto add column Valor decimal(10,2) not null;

create table Marca (
	id int generated always as identity,
	nome varchar(50) not null,
	primary key(id)
);

alter table Produto add column MarcaId int not null;
alter table Produto add constraint FK_Produto_Marca foreign key(marcaId) references marca(id);

insert into marca (nome) values ('Nike'), ('Adidas'), ('Puma'), ('Vans');

insert into Produto (nome, valor, marcaId)
values ('Puma Suede', 400, (select Id from Marca where Nome = 'Puma')),
('Adidas Breaknet', 300, (select Id from Marca where Nome = 'Adidas')),
('Adidas Grant Court', 279, (select Id from Marca where Nome = 'Adidas')),
('Nike AirForce One', 800, (select Id from Marca where Nome = 'Nike')),
('Vans Old School', 300, (select Id from Marca where Nome = 'Vans')),
('Vans Ultrarange', 500, (select Id from Marca where Nome = 'Vans'));

now() -- adiciona a data atual

-- SELECT

-- Funções
SELECT *, to_char(dtcadastro, 'DD/MM/YYYY') -- formata data para o padrão BR
FROM Produto

SELECT *, to_char(dtcadastro, 'DD/MM/YYYY') as dtFormatada-- formata data e renomeia a coluna
FROM Produto

SELECT *, to_char(dtcadastro, 'DD/MM/YYYY') as dtFormatada, to_char(dtcadastro, 'MM/DD/YYYY') as dtFormatada02
FROM Produto

SELECT min(valor) -- seleciona o menor valor da coluna (funciona para números e datas)
FROM Produto
SELECT max(valor) -- seleciona o maior valor da coluna (funciona para números e datas)
FROM Produto
SELECT sum(valor) -- retorna a soma da coluna (funciona para números e datas)
FROM Produto
SELECT avg(valor) -- retorna a média aritimética da coluna (funciona para números e datas)
FROM Produto
SELECT count(*) -- retorna a quantidade de registros, contando as linhas da coluna
FROM Produto
SELECT count(*) -- retorna a quantidade de registros com id 3
FROM Produto WHERE marcaId = 3

select * from Prodruto where valor = (select max(valor) from Produto)

-- Seletor LIKE
SELECT * FROM Produto WHERE nome LIKE 'Adidas' -- letras maiúsculas, posição do texto, etc alteram o resultado
SELECT * FROM Produto WHERE nome LIKE '%Adidas%' -- ignora a posição do texto
SELECT * FROM Produto WHERE nome LIKE '%Adi%' -- ignora a posição do texto e procura até em partes do texto
SELECT * FROM Produto WHERE nome LIKE '%Adidas' -- pesquisa somente os que começam com Adidas
SELECT * FROM Produto WHERE nome LIKE 'Adidas%' -- pesquisa somente os que terminam com Adidas
SELECT * FROM Produto WHERE nome LIKE '%Ad_das%' -- pesquisa onde inicie com Ad tenha algo no meio e termine com das

-- UPPER/LOWER
SELECT * FROM Produto WHERE UPPER(nome) LIKE '%Adi%' -- deixa a coluna em maiúsculo
SELECT * FROM Produto WHERE LOWER(nome) LIKE '%Adi%' -- deixa a coluna em minúsculo

-- ORDER BY
SELECT * FROM Produto ORDER BY valor -- ordena em ordem crescente
SELECT * FROM Produto ORDER BY valor DESC -- ordena em ordem decrescente

SELECT * FROM Produto ORDER BY valor, price -- ordena por valor E preço (primeiro por nome e depois por preço)
SELECT * FROM Produto ORDER BY valor, price DESC -- ordena por valor crescente E preço decrescente

-- GROUP BY
SELECT MarcaId, count(*) FROM Produto -- só pode ser usado como coluna, o que está sendo agrupado
GROUP BY MarcaId -- agrupa por marca (key) e conta a quantidade de elementos
SELECT MarcaId, sum(valor) FROM Produto
GROUP BY MarcaId -- agrupa por marca (key) e soma os preços do agrupamento
SELECT MarcaId, Nome, sum(valor)  FROM Produto
GROUP BY MarcaId, Nome -- como os nomes são diferentes, o agrupamento não funciona, MAAASS, ele primeiro agrupa por marcaId e DEPOIS pega esse grupo e agrupa por nome

-- GROUP BY + ORDER BY
SELECT MarcaId, count(*) FROM Produto
GROUP BY MarcaId
ORDER BY count(*) DESC

SELECT MarcaId, count(*) FROM Produto
GROUP BY MarcaId
ORDER BY sum(valor) DESC

SELECT MarcaId, count(*), sum(valor) FROM Produto
GROUP BY MarcaId
ORDER BY sum(valor) DESC

SELECT dtcadastro, marcaId, count(*) FROM Produto
GROUP BY dtcadastro, marcaId
ORDER BY dtcadastro

SELECT MarcaId, count(*) FROM Produto
GROUP BY MarcaId
HAVING count(*) > 1 -- HAVING é o WHERE do GROUP BY (o where é atrelado a tabela), exibe somente aqueles com a quantidade maior que 1
ORDER BY count(*) DESC

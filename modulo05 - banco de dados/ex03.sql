-- Enunciado
-- Utilize o banco de produtos que criamos nos arquivos "aula 2 parte 3" e "aula 2 alteracoes produtos" no Git.

-- Execute as seguintes consultas:
-- 1) Liste todos os clientes em ordem alfabética;
-- 2) Liste todos os produtos que contenham o nome 'Vans';
-- 3) Liste os IDs das marcas dos produtos e a quantidade de produtos de cada marca (não se preocupe com o nome da marca, apenas o Id na tabela produto);
-- 4) Faça a mesma consulta do item 3, porém somente as marcas que possuem mais de 1 produto;
-- 5) Faça a mesma consulta do item 4, mas só agrupe por marca os produtos que o preço for acima da média de todos os produtos;

-- DESAFIO:
-- 6) Liste todos os produtos de maior valor de cada marca.

-- Respostas

-- 1:
SELECT * FROM Produto 
ORDER BY Nome;

-- 2:
SELECT * FROM Produto 
WHERE Nome LIKE '%Vans%';

-- 3:
SELECT marcaId, count(*) FROM Produto 
GROUP BY marcaId
ORDER BY marcaId;

-- 4:
SELECT marcaId, count(*) FROM Produto 
GROUP BY marcaId
HAVING count(*) > 1
ORDER BY marcaId;

-- 5:
SELECT marcaId, count(*) FROM Produto 
WHERE valor > (SELECT avg(valor) FROM Produto)
GROUP BY marcaId
HAVING count(*) > 1
ORDER BY marcaId;

-- 6:
SELECT marcaId, max(valor) FROM Produto 
GROUP BY marcaId
ORDER BY marcaId

-- CORREÇÃO:

-- 5 CORREÇÃO:
select marcaId, count(*) from Produto 
where valor > (select avg(valor) from produto) 
group by marcaId 
order by marcaId

-- 6 CORREÇÃO (usando ALIAS/Apelido):
SELECT P1.* FROM Produto as P1 -- apelidando a tabela de P1 (não precisa do 'as')
WHERE P1.valor = (SELECT max(valor) FROM Produto as P2 WHERE P2.marcaId = P1.marcaId)
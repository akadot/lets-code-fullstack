-- Enunciado
-- Adicione uma marca qualquer para testar e execute as seguintes consultas:

-- 1) Liste Id, Nome, Marca e Valor de todos os produtos e ordene por marca;

-- 2) Faça a mesma coisa que o item 1, mas liste apenas os produtos da marca "Nike";

-- 3) Liste a Marca, a quantidade e o valor total de produtos que são da respectiva marca e ordene pela quantidade;

-- 4) Faça a mesma coisa do item 3 mas liste somente as marcas que possuem mais de 1 produto relacionado a elas;

-- 5) Liste todas as Marcas que não possuem produtos relacionados com ela e ordene por nome da marca;


-- RESPOSTA

-- 1:
SELECT Produto.id, Produto.nome, Marca.nome as Marca, valor FROM Produto
INNER JOIN Marca on Produto.marcaId = Marca.id
ORDER BY Marca.nome

-- 2:
SELECT p.id, p.nome, m.nome as marca, valor from Produto as p
INNER JOIN Marca as m on p.marcaId = m.id
WHERE m.nome LIKE '%Nike%'
ORDER BY m.nome

-- 3:
SELECT m.nome, count(*) as Qtd, sum(p.valor) as Total from Marca as m
LEFT JOIN Produto as p on m.id = p.marcaid
GROUP BY p.marcaId, m.Nome
ORDER BY count(*)

-- 4:
SELECT m.nome, count(*) as Qtd, sum(p.valor) as Total from Marca as m
LEFT JOIN Produto as p on m.id = p.marcaid
GROUP BY p.marcaId, m.Nome
HAVING count(*) > 1
ORDER BY count(*)

-- 5:
SELECT * FROM Marca as m
LEFT JOIN Produto as p on m.id = p.marcaId
WHERE p.marcaId is null
ORDER BY m.nome


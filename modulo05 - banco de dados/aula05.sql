-- JOIN
SELECT * FROM Produto -- tabela da ESQUERDA
junte com a tabela
Marca -- tabela da DIREITA


SELECT * FROM Produto
junte com a tabela
Marca
--------Cria uma nova tabela, com a junção das duas, que será a da ESQUERDA-----------
depois junte com a tabela
Modelo -- tabela da DIREITA

-- [INNER/LEFT/RIGHT] JOIN [Tabela] ON FK = PK

-- INNER JOIN
SELECT * FROM Produto
INNER JOIN Marca on marcaId = Marca.id -- marcaId ou Produto.marcaId = Produto, id ou Marca.id = Marca (a ordem nao importa)

-- FULL JOIN
SELECT * FROM Produto
FULL JOIN Marca on marcaId = Marca.id 

-- LEFT JOIN
SELECT * FROM Produto
LEFT JOIN Marca on marcaId = Marca.id -- traz tudo da tabela da esquerda e o que for relacionado da tabela da direita

SELECT * FROM Produto
LEFT JOIN Marca on marcaId = Marca.id and Produto.valor > 100 -- adiciona um segundo filtro, o que não compreender os filtros é preenchido com NULL

-- RIGHT JOIN
SELECT * FROM Produto
RIGHT JOIN Marca on marcaId = Marca.id -- traz tudo da tabela da direita e o que for relacionado da tabela da esquerda

SELECT * FROM Produto
RIGHT	 JOIN Marca on marcaId = Marca.id and Produto.valor > 100 -- adiciona um segundo filtro, o que não compreender os filtros é preenchido com NULL

-- RIGHT/LEFT com apenas os dados relacionados
SELECT M.* FROM Produto P
RIGHT	 JOIN Marca M on marcaId = Marca.id -- exibe de produtos somente os dados relacionados a marca

SELECT M.id, P.id, P.nome, P.valor FROM Produto P
RIGHT	 JOIN Marca M on marcaId = Marca.id -- customiza os campos a serem exibidos

SELECT M.id as IDMarca, P.id as IDProduto, P.nome, P.valor FROM Produto P
RIGHT	 JOIN Marca M on marcaId = Marca.id -- customiza os campos a serem exibidos e renomeando as colunas de mesmo nome


-- EXEMPLO COM TABELA DE COMPRAS
SELECT cp.id, cl.nome, md.nome as motivo, count(*) as QtdCompra, sum(i.qtd) as QtsItens FROM Compra cp
INNER JOIN Cliente cl on cp.clienteId = cl.id --traz o nome do cliente para a compra
LEFT JOIN MotivoDevolucao md on cp.motivodevolucaoId = md.id --adiciona o motivo da devolução, preservando os dados da tabela a esquerda (o primeiro join)
INNER JOIN ItensCompra ic on cp.id = ic.compraId --junta os itens da compra, baseado no id da compra na tabela ItensCompra e o id da tabela Compras
GROUP BY cp.id, cl.nome, motivo --agrupa pelo id da compra, nome e motivo
ORDER BY sum(i.qtd) DESC --QtsItens não é acessado no order by
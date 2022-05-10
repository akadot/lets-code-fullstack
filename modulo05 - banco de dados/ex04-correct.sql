-- Enunciado
-- Adicione uma marca qualquer para testar e execute as seguintes consultas:

-- 1) Liste Id, Nome, Marca e Valor de todos os produtos e ordene por marca;

-- 2) Faça a mesma coisa que o item 1, mas liste apenas os produtos da marca "Nike";

-- 3) Liste a Marca, a quantidade e o valor total de produtos que são da respectiva marca e ordene pela quantidade;

-- 4) Faça a mesma coisa do item 3 mas liste somente as marcas que possuem mais de 1 produto relacionado a elas;

-- 5) Liste todas as Marcas que não possuem produtos relacionados com ela e ordene por nome da marca;

-- Ex 1
select p.id, p.nome, m.nome as marca, valor from Produto p
inner join Marca m on p.marcaId = m.id
order by m.nome

-- Descoberto join preguiçoso pelo Giu
SELECT p.id, p.nome, m.nome, p.valor
FROM Produto p, Marca m
WHERE p.marcaId = m.id
ORDER BY m.nome;

-- Ex 2
select p.id, p.nome, m.nome as marca, valor from Produto p
inner join Marca m on p.marcaId = m.id
where p.nome like '%Nike%'
order by m.nome

-- ou (mais eficiente)
select p.id, p.nome, m.nome as marca, valor from Produto p
inner join Marca m on p.marcaId = m.id
where p.marcaId = (select Id from marca where nome = 'Nike') -- busca pela chave estrangeira
order by m.nome

select p.id, p.nome, m.nome as marca, valor from Produto p
inner join Marca m on p.marcaId = m.id
where p.marcaId IN(1,2) --alternativa ao 'or', para trazer 2 ou mais 'marcas' de uma vez
order by m.nome

-- Ex 3
select m.Nome, count(*) as Qtd, sum(p.Valor) as ValorTotal from Marca m
left join Produto p on m.Id = p.MarcaId
group by p.marcaId, m.Nome
order by count(*) -- ou pelo alias Qtd

-- Ex 4
select m.Nome, count(*) as Qtd, sum(p.Valor) as ValorTotal from Marca m
left join Produto p on m.Id = p.MarcaId
group by p.marcaId, m.Nome
having count(*) > 1
order by count(*) -- ou pelo alias Qtd

-- Ex 5
select m.nome as marca from produto p 
right join marca m on p.marcaid = m.id
where p.marcaid is null
order by marca desc
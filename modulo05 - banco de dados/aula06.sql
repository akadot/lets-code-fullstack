-- UNIONS / INDÍCES / PLANO DE EXECUÇÃO / BACKUP

-- UNION (juntar resultados de 2 ou mais tabelas/selects)
-- É NESCESSÁRIO QUE AS TABELAS TENHAM O MESMO NÚMERO DE LINHAS/COLUNAS E O MESMO TIPO DE DADOS
select * from Produto
UNION --une com o distinct, ignorando duplicados
select * from Produto

select * from Produto
UNION ALL --une tudo
select * from Produto

-- trazendo tabelas diferentes
select id, nome, 1 as Type from Produto --cria a tabela Type para exemplo
UNION ALL --une tudo
select id, nome, null from Produto --preenche o que não existir de TYPE com null, para a união


-- ÍNDICES (como se fosse um sumário, para busca binária e otimização de pesquisa. Recomendado usar índice em chave estrangeira)

-- ÍNDICE CLUSTERIZADO (só pode haver 1 por tabela, ele é salvo em ordem no disco (primary key))
PRIMARY KEY

-- ÍNDICE NÃO CLUSTERIZADO (não ordena o registro ao salvar no disco, pode haver mais do que 1 (foreign key), usado quando se tem muita consulta na tabela em questão)

create index IX_Produto_MarcaId on Produto(marcaId); --cria um índice para a marcaId (é indicado criar o índice quando se tem muitas consultas recorrentes naquela coluna)

create index IX_Produto_MarcaId_DTCadastro on Produto(marcaId, dtCadastro); --2 índices

select * from Cliente
create unique index IX_Cliente_Nome on Cliente(nome); --cria um índice de valor único

insert into cliente(nome) values('Davi'); --esse campo já estava criado, então deu erro, pois o INDEX agora é UNIQUE

create unique index IX_Cliente_Nome on Cliente(nome) where nome is not null;--para que os campos nulos não recebam indices, já que podem existir vários campos nulos, o que atrapalharia nas buscas (é difícil achar uma tabela que permita nulos e que tenha índice, maaaaas)

-- FORÇAR USO DO INDEX
select * from Produto with(index(IX_Produto_MarcaId));


--PLANO DE EXECUÇÃO

--Ordem de execução do SQL
-- 1 - FROM
-- 2 - WHERE
-- 3 - GROUP BY
-- 4 - HAVING
-- 5 - SELECT
-- 6 - ORDER BY

--where: colocar a condição mais exclusiva/excludente primeiro, para eliminar mais registros logo no início

--Plano de Execução do SQL: tem no DBeaver, PGAdmin, etc
--SCAN - olhando todos os registros
--SEC - executando de forma sequencial
--HASH - dos registros buscados, faça uma representação em hash, para ficar de uma forma reduzida e mais performática (simplifica uma informação complexa)
--SORT - ordena
--AGRUPATE - agrupa informações (count, sum, avg, etc)


-- BACKUP

--Backup Full: salva todos os dados do banco em um arquivo, é mais custoso e normalmente é feito todos os dias, quando o fluxo é menor (noite/madrugada)

--Backup Incremental: salva somente os dados alterados, baseado no último backup incremental

--Backup Diferencial: semelhante ao incremental, porém ele pega os dados baseado no backup full, assim, caso haja erro, ele restaura tudo o q foi alterado durante o dia, desde o backup full

--Backup Incremental Contínuo: semelhante ao incremental, mas não entendi a diferença, malz
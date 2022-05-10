-- VIEWS/FUNCTIONS/STORAGE PROCEDURE

-- VIEW
CREATE VIEW vw_marcas as 
SELECT * -- o que for colocado aqui será 'encapsulado' dentro da view

--usando
SELECT * FROM vw_marcas
SELECT nome, qtd FROM vw_marcas
SELECT nome, qtd FROM vw_marcas ORDER BY nome -- o order by é esxecutado no resultado que a VIEW retornar

CREATE OR REPLACE vw_marcas AS --... para alterar uma view já criada
--(no SQL existe o ALTER VIEW, mas o postgres não tem)


-- FUNCTIONS (métodos que retornam algo, porém, no postgres pode se ter uma função que retorna void)
CREATE OR REPLACE FUNCTION totalProducts() RETURNS integer
LANGUAGE plpgsql --postgres language
AS $$
	DECLARE total int; --declara a variável para usar no retorno
BEGIN
	SELECT count(*) INTO total --seleciona, cria uma tabela temporária com o INTO, armazena no total
	FROM Produto;

	RETURN total; --retorna o total
END
$$

SELECT totalProducts()

-- a function pode retornar int,varchar,date,void,... somente valores únicos, não podem retornar outras tabelas

-- Passando parâmetro
CREATE OR REPLACE FUNCTION totalProducts(marca int) RETURNS integer --passa argumentos e o tipo deles
LANGUAGE plpgsql
AS $$
	DECLARE total int;
BEGIN
	SELECT count(*) INTO total
	FROM Produto
	WHERE marcaId = marca; --o postgres se perde se o campo e o argumento forem os mesmos

	RETURN total;
END
$$

SELECT totalProducts(1)

--usando DECLARE fora da função (no postgres não roda)
-- usar o DO (é muito fora da lógica, vou pesquisar depois) 
-- link: https://stackoverflow.com/questions/5456581/declare-variable-not-in-function-by-postgres


-- STORAGE PROCEDURE (não obriga retorno)
CREATE PROCEDURE sp_changeBrandProductValue(marca int, incrementValue int)
LANGUAGE pspgsql
BEGIN ATOMIC
	UPDATE produto set valor = valor + incrementValue
	WHERE	marcaId = marca
END;

CALL sp_changeBrandProductValue(2,10) --aumenta marca 2 em 10 reais

-- Trigger


-- NoSQL

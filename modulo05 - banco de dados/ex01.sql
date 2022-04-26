-- Enunciado
-- Crie um banco de dados com a seguinte estrutura:

-- uma tabela de alunos que possua as colunas nome, cpf e e-mail. Deixe todas as colunas permitindo valores nulos;
-- insira alguns registros utilizando as sintaxes possíveis no SQL;
-- faça algumas inserções com valores nulos;
-- altere os campos para limitar a 60 caracteres e não permitir nulos.
-- Envia a sequência de instruções em arquivo.

CREATE DATABASE ESCOLA;

CREATE TABLE ALUNOS (
	id int PRIMARY KEY,
	nome varchar,
	cpf varchar,
	email varchar
);

INSERT INTO ALUNOS (id, nome, cpf, email) VALUES (1, 'Fausto Silva', '01234567890', 'email@email.com');
INSERT INTO ALUNOS VALUES (2, 'Zumiro', '12345678901', 'outroemail@email.com');
INSERT INTO ALUNOS VALUES (3, 'A', '12345678902', null);

ALTER TABLE ALUNOS ALTER COLUMN nome type varchar(60);
ALTER TABLE ALUNOS ALTER COLUMN nome set not null;
ALTER TABLE ALUNOS ALTER COLUMN cpf type varchar(11);
ALTER TABLE ALUNOS ALTER COLUMN cpf set not null;
ALTER TABLE ALUNOS ALTER COLUMN email type varchar(60);
ALTER TABLE ALUNOS ALTER COLUMN email set not null; --ERRO PROPOSITAL

UPDATE ALUNOS SET email = '' WHERE email is null; --CORRIGINDO ERRO

ALTER TABLE ALUNOS ALTER COLUMN email set not null; --SUCESSO

SELECT * FROM ALUNOS;


CREATE TABLE IF NOT EXISTS alunos(
	cpf varchar(14) not null,
	nome varchar,
	email varchar,
	PRIMARY KEY(cpf)
);

INSERT INTO alunos values('1', 'A', 'e');

-- UPDATE alunos SET nome = substring(nome from 0 for 10); -- caso o nome seja muito grande

UPDATE alunos SET nome = '' WHERE nome is null;
ALTER TABLE alunos ALTER COLUMN nome set not null;

SELECT * FROM alunos
--Exemplo de insert com select
insert into Usuarios
values ('12312312312', 'Davi Nascimento', 'teste@teste.com',
	   'du9f8y8dfyd78yfdgfyugff', '1997-10-29',
	   (select Id from Departamentos where nome = 'Contabilidade'))

--Exemplo de insert com select formatando data
SET datestyle = "DMY";

insert into Usuarios
values ('12312312314', 'Davi Nascimento', 'teste@teste.com',
	   'du9f8y8dfyd78yfdgfyugff', '29/10/1997',
	   (select Id from Departamentos where nome = 'Contabilidade'))

-- Exemplo de update com select
update Usuarios set nome = 'Davi G Nascimento'
where cpf = (select cpf from Usuarios where email = 'teste123@teste.com')

-- Begin, Rollback e Commit

BEGIN
UPDATE -- o que for feito aqui, abaixo do begin, poderá ser desfeito com rollback
ROLLBACK -- desfaz tudo antes, até o begin
COMMIT -- confirma as alterações depois do begin
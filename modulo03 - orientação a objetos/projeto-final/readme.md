# Projeto prático (POO)

Vamos implementar a modelagem de um sistema de delivery de refeições. Para tal, será necessário criar as classes que representam cada uma das entidades envolvidas no processo.
Serão considerados como requisitos:

- Deverão ser abordados os conceitos estudados ao longo do módulo, a saber: Orientação a Objetos, Classes, Atributos, Métodos, Herança, Polimorfismo, Encapsulamento, Métodos de acesso, etc

- Existem 3 perfis possíveis de usuários (cliente, lojista e entregador);

- O lojista poderá manipular o cardápio (adicionar, remover, alterar os pratos). Poderá, também, cancelar um pedido que esteja em andamento, ao qual esteja associado;

- O cliente poderá montar o carrinho, adicionando itens, remover itens, alterar quantidade dos itens ou cancelar o carrinho, e realizar um pedido;

- O entregador poderá visualizar os pedidos disponíveis e se marcar como entregador deste;

- Ao finalizar um pedido, o lojista terá a sua lista de pedidos atualizada com este;

- O cliente poderá finalizar um pedido, confirmando a entrega.

- O cliente não poderá cancelar um pedido que já tenha um entregador associado

- Os requisitos acima são os requisitos mínimos, mas podem usar a criatividade para desenvolver algo a mais, atentando sempre ao prazo, que será nossa última aula, dia 25/03/2022

## Set up inicial

Esse projeto depende do módulo [readline-sync](https://www.npmjs.com/package/readline-sync) para funcionar. Portanto, antes de rodar, você precisaŕa usar o comando:

```
npm install
```

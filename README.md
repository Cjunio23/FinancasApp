# FinancasApp 🤑 : Exemplo Prático de Microsserviços

Este repositório contem um exemplo simples de aplicativo móvel para gerenciamento financeiro pessoal construído usando uma arquitetura modular, simulando o conceito de microsserviços.

Trabalho – Laboratório de Engenharia de Software I - Prof. Eduardo Cunha Campos.

#### Grupo: Ana Clara Cunha 20193010017; Custodio Junio 20213012900; Thiago Ribeiro
       
É um aplicativo simples e versátil para gerenciamento financeiro pessoal, desenvolvido com React Native.

### Visão Geral:
O FinançasApp ajuda os usuários a organizar suas finanças, permitindo:
* Registrar receitas e despesas.
* Acompanhar o saldo atual.
* Planejar lançamentos futuros.
* Organizar transações por categoria, prazo e valor.

Com uma interface intuitiva e prática, o app é ideal para uso diário.

## Arquitetura do Sistema
A aplicação segue uma arquitetura de Cliente-Servidor:

* Back-end: Construído com Node.js usando o framework Express. É responsável por gerenciar transações financeiras, armazenando dados em um banco de dados MongoDB.
* Front-end: Desenvolvido em React Native, fornece uma interface intuitiva para os usuários acessarem e manipularem seus dados financeiros.
* Comunicação: O front-end comunica-se com o back-end através de uma API RESTful, utilizando requisições HTTP.

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

* Node.js (v16+)
* NPM ou Yarn
* MongoDB
* React Native CLI e um ambiente configurado para Android (Android Studio).

## Configuração do Back-end
#### 1. Clone o repositório:
   
<code>git clone https://github.com/seu-usuario/financas-app.git
cd financas-app/financas-backend</code>

#### 2. Instale as dependências:

<code>npm install</code>

#### 3. Inicie o MongoDB localmente ou conecte-se a um servidor MongoDB.

#### 4. Inicie o servidor:

<code>node app.js</code>

O back-end estará disponível em: <code>http://localhost:5000</code>

## Configuração do Front-end

#### 1. Navegue para o diretório do front-end:

<code>cd financas-app/financas-app</code>

#### 2. Instale as dependências:

<code>npm install</code>

#### 3. Execute o aplicativo no emulador ou dispositivo físico:

<code>npx react-native run-android</code>

## Testando o Sistema

#### 1. Adicione uma transação:
* Navegue até a tela "Add Transaction".
* Preencha os campos (categoria, valor, tipo de transação) e salve.

#### 2. Verifique as transações:
* Na tela "Transactions", visualize todas as transações registradas.

#### 3. Home Screen:
* A tela inicial exibe uma visão geral das funcionalidades do app.

## Tecnologias Utilizadas
* Node.js com Express para back-end
* MongoDB como banco de dados
* React Native para front-end
* Axios para comunicação entre front-end e back-end

## Comentários Finais

Este projeto foi idealizado para oferecer aos usuários uma forma prática e acessível de gerenciar suas finanças pessoais, aproveitando a flexibilidade e a popularidade do React Native para alcançar múltiplas plataformas. 
A aplicação foca na experiência do usuário, integrando ferramentas que facilitam a visualização e o controle financeiro em tempo real.

## Sugestões de melhorias futuras:
* Implementar notificações personalizadas para lembretes de contas e metas.
* Adicionar suporte a múltiplas moedas e conversão em tempo real.
* Incorporar um sistema de categorização automática baseado em machine learning para as transações.
* Disponibilizar relatórios financeiros em formato PDF para exportação.


#### Sinta-se à vontade para contribuir, sugerir melhorias ou relatar problemas! Este projeto está em constante evolução, e sua participação é muito bem-vinda.



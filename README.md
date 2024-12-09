# FinancasApp 🤑

Trabalho – Laboratório de Engenharia de Software I
Prof. Eduardo Cunha Campos.

Grupo: Ana Clara
       Custodio Junio
       Thiago Ribeiro
       
E um aplicativo simples e versátil para gerenciamento financeiro pessoal, desenvolvido com React Native.

Visão Geral:
O FinançasApp ajuda os usuários a organizar suas finanças, permitindo:
-Registrar receitas e despesas.
-Acompanhar o saldo atual.
-Planejar lançamentos futuros.
-Organizar transações por categoria, prazo e valor.
Com uma interface intuitiva e prática, o app é ideal para uso diário.

Funcionalidades:

✔️ Login seguro com autenticação por login e senha.
✔️ Adicionar transações (receitas e despesas).
✔️ Visualizar o saldo atual com lançamentos futuros.
✔️ Registrar transações com categorias, prazos e valores.
✔️ Visualizar previsões financeiras dos próximos meses.

Pré-requisitos:
-Antes de começar, certifique-se de que você possui as ferramentas abaixo instaladas:
-Node.js (versão 16 ou superior).
-Expo CLI (para desenvolvimento e testes).
-Um editor de código (recomendamos o VS Code).

Configuração do Projeto:
1. Clone o Repositório: 
Copiar código: git clone https://github.com/seu-usuario/FinancasApp.git  
cd FinancasApp
2. Instale as Dependências:
npm install
3. Execute o Projeto:
npm start

Abra o Expo Go no seu dispositivo e escaneie o QR Code exibido no terminal ou navegador.

Estrutura do Projeto:
A organização do código segue o padrão abaixo:
src/
├── components/        # Componentes reutilizáveis
├── screens/           # Telas do aplicativo
├── services/          # Configuração do Firebase
├── styles/            # Estilos globais
├── utils/             # Funções utilitárias

Capturas de Tela:

Tela de Login
Permite que o usuário faça login no aplicativo com login e senha.

Tela Inicial (Home)
Mostra o saldo atual do usuário e permite registrar novas receitas e despesas. Também possibilita visualizar lançamentos futuros.

Tela de Transações
Permite registrar receitas e despesas, definindo categorias, prazo e valor.

Tela lançamentos futuros:
Exibe as previsões financeiras dos próximos meses com base nos lançamentos cadastrados pelo usuário.

Tecnologias Utilizadas:

React Native: Desenvolvimento do aplicativo.
Firebase: Backend para armazenamento de dados.




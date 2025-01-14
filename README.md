# FinancasApp 🤑

Trabalho – Laboratório de Engenharia de Software I
Prof. Eduardo Cunha Campos.

Grupo: Ana Clara Cunha 20193010017
       Custodio Junio 20213012900
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

Tecnologias Utilizadas

- Frontend: React Native
  - Bibliotecas:
    - Expo
    - React Navigation
    - Redux (para gerenciamento de estado)
- Backend: Firebase (opcional, pode ser substituído por outro serviço backend)
  - Autenticação
  - Firestore (banco de dados)
- Ferramentas de Desenvolvimento:
  - Visual Studio Code
  - Node.js

Configuração do Ambiente
Pré-requisitos:

- Node.js >= 16.0.0
- Expo CLI
- Conta no Firebase (se optar por usá-lo como backend)
- Dispositivo físico ou emulador para testes (Android/iOS)

Instalação
1. Clone o repositório:
   bash git clone https://github.com/seu-usuario/sistema-financas.git 
2. Navegue até o diretório do projeto:
   bash cd sistema-financas 
3. Instale as dependências:
   bash npm install
4. Configure o Firebase:
   - Crie um projeto no Firebase e configure as credenciais no arquivo `.env`.
   - Exemplo de configuração no `.env`:
  env
     FIREBASE_API_KEY=your_api_key
     FIREBASE_AUTH_DOMAIN=your_auth_domain
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     FIREBASE_APP_ID=your_app_id
5. Inicie o servidor Expo:
bash npx expo start
6. Escaneie o QR Code com seu dispositivo móvel para abrir o app ou utilize um emulador.
   
Estrutura de Diretórios

plaintext
sistema-financas/
├── assets/             # Imagens e recursos estáticos
├── components/         # Componentes reutilizáveis
├── screens/            # Telas do aplicativo
├── navigation/         # Configuração de navegação
├── redux/              # Gerenciamento de estado
├── services/           # Serviços externos (ex.: Firebase)
├── utils/              # Funções utilitárias
├── App.js              # Ponto de entrada do aplicativo
├── package.json        # Configuração do projeto
└── README.md           # Documentação.

Comentários Finais

Este projeto foi idealizado para oferecer aos usuários uma forma prática e acessível de gerenciar suas finanças pessoais, aproveitando a flexibilidade e a popularidade do React Native para alcançar múltiplas plataformas. 
A aplicação foca na experiência do usuário, integrando ferramentas que facilitam a visualização e o controle financeiro em tempo real.

Sugestões de melhorias futuras:

Implementar notificações personalizadas para lembretes de contas e metas.
Adicionar suporte a múltiplas moedas e conversão em tempo real.
Incorporar um sistema de categorização automática baseado em machine learning para as transações.
Disponibilizar relatórios financeiros em formato PDF para exportação.
Sinta-se à vontade para contribuir, sugerir melhorias ou relatar problemas! Este projeto está em constante evolução, e sua participação é muito bem-vinda.



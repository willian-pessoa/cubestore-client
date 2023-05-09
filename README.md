<h1 align="center">CUBESTORE FRONT-END</h1>

<p align="center">Front-end do projeto MERN full stack que tem como base o tutorial feito por EdRoh, que pode ser acessado clicando neste <a href="https://youtu.be/0cPCMIuDk2I" target="_blank">link</a>. Modificações no codigo estão sendo feitas por mim, Willian Pessoa, para adicionar novas funcionalidades e incrementos.</p>

#### Demo: 

### Status do Projeto

Em desenvolvimento

### Features

- [x] Login de usuário
- [ ] Cadastro de usuario
- [x] Dashboard
- [x] Client Facing
- [x] Sales
- [x] Management
- [ ] Configurações de Usuario
- [ ] Remover Usuario
- [ ] Editar Produto
- [ ] Cadastrar Produto
- [ ] Remover Produto
- [ ] Proteção de rota

### Dificuldades e Desafios durante o projeto(front-end e back-end):

12/04/2023
- Primeira requisição do front end para o back end usando toolkit query estava sendo rejeitada, testei end point separado usando navegador direto no back end e funcionou normal, verifiquei se o id que estava sendo pego do store no redux para a requisição estava ok tambem, por fim lembrei que tinha configurado a variavel de ambiente para a url base das requições porem não havia resetado o o serviço do front end, depois disso a requisição funcionou como deveria.

- A box com as informações do User no Drawer estava configurado com position absolute, o que era um problema quando o Drawer tinha overflow, pois essa box ficava porcima das opções. Para corrigir isso configurei o display da div do drawer para flex e justify-content para space-between. Como são apenas duas box, isso faz com que a box com informações do User sempre fica na parte de baixo e sem atrapalhar quando a tela do usuario acontece overflow. 

18/04/2023
- Card de produto, as informações de vendas anuais não aparecia devido estar recebendo um array com um objeto ao inves de apenas o objeto. Alterado para ser lido corretamente. 

20/04/2023
- Pagina de Transactions, a tabela não atualizava para a quantidade correta de linhas quando alterado, não atualizava os dados quando trocava de pagina. Corrigido alterando o codigo do tutorial para o codigo sugerido na documentação do MUI DataGrid

25/04/2023
- As paginas com graficos se expandiam de tamanho quando a side bar era minimizada, porem não se retraia quando reaberta, ajustei isto retirando o tamanho da side bar de forma bruta, porem se a janela estiver em tamanhos entre de 600 a uns 800px, a visualização pode ficar meio estranha, depois vou alterar isso para se ajustar conforme a side bar estar ativa ou não.

26/04/2023
- Coloquei os graficos para ficarem centralizados, agora fica um pouco melhor a visualização quando a side bar é minimizada.

01/05/2023
- Componente de customização de coluna das tabelas estava desatualizado com a ultima versão do MUI data grid, corrigi fazendo as modificações necessarias para a ultima versão.

02/05/2023
- Problema de requisição no end point "managment/performance/:id", eu tinha digitado perfomance no router e as requisiçoes estavam sendo feitos escritos com performance

### Desafios implementando novas funcionalidades

08/05/2023
- Adicionei funcionalidade de login, gerando token jwt para admins e superadmins poderem operarem CRUD na Api. Adicionei tambem novos estados globais para o redux, para assim indentificar mais facil o usuario logado e fazer a liberação de funcionalidades de acordo com o seu papel.

09/05/2023
- Organizei os codigos relacionados ao redux em novos arquivos, implementei persit para o usuario nao precisar logar a cada atualização de pagina. Modifiquei sidebar para se ajustar conforme o papel do usuario.
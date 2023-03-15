# Ignite Teams

![ignite-teams](https://user-images.githubusercontent.com/104842709/224875370-959d4c9a-0640-4872-878b-1492a874862c.png)

## Sobre o projeto

 A aplicação tem como objetivo ajudar as pessoas que tem problemas em organizar uma turma para jogar.

 Quando o usuário entrar na aplicação, vai se deparar com a interface de Turmas, que é onde vai poder criar uma nova turma e        visualizar as turmas criadas.

 Clicando em "Criar nova turma", o usuário será direceionado para a rota de "Nova turma", onde vai poder digitar o nome da turma e clicar no botão de criar, assim podendo criar sua turma para o jogo desejado.

 Na rota onde a tua está criada, o usuário vai poder selecionar o TIMA A e o TIME B, podendo digitar o nome do participante e adicionando ao time que está selecionado.

 Caso o usuário tenha adicionado um participante com o mesmo nome no Time A ou Time B, vai aparecer uma mensagem de alerta avisando que tal participante já foi adicionado ao Time. Um alerta vai parecer também, se o usuário tentar adicionar uma string vazia.

 Se por algum motivo o participante precise ser removido do time, vai ter a funcionalidade para poder retirnar o participante do time.

 O criador da turma poderá remover a turma completa também, caso já tenha participado do jogo ou cancelado o evento.

 Extra: Para demonstrar um feedback de que está acontecendo certa coisa na hora que o usuário for fazer certa ação na aplicação,  foi adicionado um Loading quando o usuário entrar na aplicação, visualizar as turmas e quando for adicionar um participante.

## Funcionalidades

- Navegação entre rotas
- Criar nova turma
- Remover turma
- Adicionar participantes no TIME A ou TIME B
- Remover participante(s)
- Validações


## Stack utilizada

**Front-end:** React Native, Typescript , Expo, Styled-components, Async Storage 


## Iniciando o projeto

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npx expo start
  npm start
```


## Autor do projeto

*Lucas Carvalho*

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasdmmc)

[![github](https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucasdmmc)

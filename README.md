![Lucree](https://lucreestatic.s3.us-east-2.amazonaws.com/dashboard/assets/img/brand/logo-lucree-horizontal.png)

# Desafio Front-End

O desafio consiste em criar uma aplicação utilizando ReactJS integrada com a API da [`https://reqres.in/`](https://reqres.in/).

Ao finalizar o desafio o candidato deve dar **fork** neste repositório e após o termino do desenvolvimento, realizar um **pull request** para análise do time.

Deverá informar quais tecnologias foram usadas, como instalar, rodar e efetuar os acessos no arquivo [`details.txt`](https://github.com/Lucree-Dev/desafio-backend/blob/master/details.txt) para análise do desafio (se necessário).

## Funcionalidades em detalhe
- Página de login
    - Permitir a autenticação por usuário e senha.
- Páginas restritas
    - As páginas de listar, cadastrar, editar e deletar usuários só podem ser acessadas por um usuário logado.
- Página inicial
    - Lista de usuários (Com nome, sobrenome, e-mail e avatar)
    - Opções para editar a deletar cada usuário da lista
    - Link para a página de criar novo usuário
- Página de cadastro e edição de usuário
    - Campos de nome e profissão
    - Não permitir envio da requisição caso algum campo esteja vazio.
- Consulte a documentação da API em [`https://reqres.in/`](https://reqres.in/) para saber quais endpoints e métodos utilizar.


## Requerimentos técnicos do desafio
- Utilizar `ES6`
- Utilizar `ReactJS`
- Utilizar `Redux`
- Utilizar `Axios`
- Utilizar `Sass`
- Aplicação responsiva
- Escreva documentação (Comentários) para o que faça sentido

    ### Extra
    - Utilizar `Bootstrap 4`


## Endpoints da API ([`Req|Res`](https://reqres.in/))
Utilize os endpoints abaixo:
- LIST USERS
- SINGLE USER
- CREATE
- UPDATE
- DELETE
- LOGIN


## O que será avaliado

- Estrutura do projeto
- Padrões utilizados
- Reutilização de código
- Semântica
- Configurações do projeto
- Layout e design


### Obs

Por se tratar de uma API Fake os dados não serão alterados por sua ações (Criar editar, deletar), sendo assim preocupe-se com os retornos conforme a documentação.

Mesmo que não consiga concluir o desafio, iremos avaliar o que for entregue.


---
#### LICENSE
```
MIT License

Copyright (c) 2020 Lucree Soluções Inteligentes.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

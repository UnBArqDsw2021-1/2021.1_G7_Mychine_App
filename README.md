# 2021.1_G7_Mychine_App

![Vercel](https://vercelbadge.vercel.app/api/UnBArqDsw2021-1/2021.1_G7_Mychine_App?style=for-the-badge) [![Main workflow](https://github.com/UnBArqDsw2021-1/2021.1_G7_Mychine_App/actions/workflows/main.yml/badge.svg)](https://github.com/UnBArqDsw2021-1/2021.1_G7_Mychine_App/actions/workflows/main.yml)

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 07<br>

## Alunos

| Matrícula  | Aluno                           |
| ---------- | ------------------------------- |
| 18/0106970 | Matheus Gabriel Alves Rodrigues |
| 18/0113151 | Eduardo Nunes Picolo            |
| 17/0011267 | Giovanna Borges Bottino         |
| 18/0122258 | Igor Queiroz Lima               |
| 18/0042238 | João Gabriel de Matos           |
| 18/0124498 | Kess Jhones Gomes Tavares       |
| 18/0129287 | Pedro Henrique Vieira de Lima   |
| 14/0065547 | Roberto Martins da Nóbrega      |
| 18/0130722 | Samuel Nogueira Bacelar         |

## Sobre

Uma aplicação web chamada Mychine, permite alugar equipamentos como pequenos tratores, cavadeiras e outros materiais tipicamente utilizados na construção civil. Todo o processo de aluguel é feito de forma online facilitando o serviço para o locatários e o locadores.

## Screenshots Quarta Entrega (FINAL) <<FOCOS: Arquitetura & Reutilização de Software & PROJETO FINAL>>

| | | |
| - | - | - |
|![screenshot1](/public/img/entrega4/screenshot1.png)|![screenshot2](/public/img/entrega4/screenshot2.png)| ![screenshot3](/public/img/entrega4/screenshot3.png) |


## Vídeo(s) Quarta Entrega (FINAL) <<FOCOS: Arquitetura & Reutilização de Software & PROJETO FINAL>>

| | |
| - | - |
|[![Vídeo 1 - Módulo Estilos e Padrões Arquiteturais](/public/img/entrega4/screenshot_video1.png)](https://www.youtube.com/watch?v=0De87u8pZLg) | [![Vídeo 2 - Módulo Reutilização de Software](/public/img/entrega4/screenshot_video2.png)](https://www.youtube.com/watch?v=M7XcdJPwNk8)|

## Descritivo dos Principais Aspectos Técnicos

**Principal(is) Metodologia(s) Adotada(s)**: Scrum e Kanban<br>
**Principais Linguagens Utilizadas e/ou Pretendidas**: Typescript<br>
**Principais Tecnologias Utilizadas e/ou Pretendidas**: NextJS<br>
**Principal(is) Estilo(s) Arquitetural(is) Adotado(s)**: Cliente-Servidor<br>

## O Projeto está rodando?

(X) SIM
( ) NÃO

- Executa os containers da aplicação

```bash
docker-compose up --build
```

- Executa as migrations iniciais da aplicação e as seeds

```bash
docker exec mychineapp yarn db-setup
```

- Caso deseje executar apenas as migrations iniciais depois as seeds execute os seguintes comandos:

**Migrations**

```bash
docker exec mychineapp yarn prisma migrate dev --skip-seed
```

**Seeds**

```bash
docker exec mychineapp yarn prisma db seed
```

## Informações Complementares

Quaisquer outras informações sobre seu projeto podem ser descritas nessa seção.

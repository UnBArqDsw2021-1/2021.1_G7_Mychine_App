# 2021.1_G7_Mychine_App

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

Adicione 2 ou mais screenshots do projeto em termos de interface e/ou funcionamento.

## Vídeo(s) Quarta Entrega (FINAL) <<FOCOS: Arquitetura & Reutilização de Software & PROJETO FINAL>>

Adicione o(s)s vídeo(s) da Entrega Final.

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

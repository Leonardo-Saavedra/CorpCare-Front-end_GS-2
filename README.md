# Projeto CorpCare — Global Solution

## 1. Título e Descrição
Plataforma de bem‑estar corporativo (CorpCare) para promover saúde mental no trabalho, oferecendo cadastro, agendamento e recursos de apoio para colaboradores.

## 2. Status do Projeto
🚧 Em desenvolvimento 🚧

## 3. Sumário
1. [Sobre o Projeto](#4-sobre-o-projeto)  
2. [Tecnologias Utilizadas](#5-tecnologias-utilizadas)  
3. [Instalação](#6-instalação)  
4. [Como Usar](#7-como-usar)  
5. [Estrutura de Pastas](#8-estrutura-de-pastas)  
6. [Endpoints ou Rotas Principais](#9-endpoints-ou-rotas-principais)  
7. [Autores e Créditos](#10-autores-e-créditos)  
8. [Contato](#11-contato)  
9. [Links Úteis](#12-links-úteis)

## 4. Sobre o Projeto
CorpCare é uma aplicação front-end em React (Vite + TS) que consome uma API Java (Quarkus/Spring Boot). Objetivo: centralizar funcionalidades de bem‑estar (cadastro de usuário, login, listagem, agendamento, dashboards simples).

## 5. Tecnologias Utilizadas
- React + Vite + TypeScript  
- TailwindCSS  
- API Java (Quarkus / Spring Boot) — variável de ambiente `VITE_API_URL`  
- Node.js / npm

## 6. Instalação
1. Clone o repositório:
```bash
git clone https://github.com/Leonardo-Saavedra/Front-end_GS-2
```
2. Acesse a pasta do projeto:
```bash
cd CorpCare
```
3. Instale dependências:
```bash
npm install
```
4. Crie `.env` com a variável:
```
VITE_API_URL= ***LINK DE JAVA***
```

## 7. Como Usar
1. Rodar em desenvolvimento:
```bash
npm run dev
```
2. Acesse localmente: http://localhost:5173  
3. URL pública da aplicação (inserir após deploy): ***URL DEPLOY***

## 8. Estrutura de Pastas
```
/src
  /assets
  /components
  /pages
  /services
  /utils
public
vite.config.ts
package.json
README.md
```

## 9. Endpoints ou Rotas Principais
(Base definida por `VITE_API_URL`)
- `POST /api/clientes` — Cadastro de cliente/usuário  
- `POST /api/login` — Autenticação  
- `GET /api/clientes` — Listagem de clientes


## 10. Autores e Créditos
| Nome                                    | RM      | Turma   | LinkedIn                                      | GitHub                                      |
|-----------------------------------------|---------|---------|-----------------------------------------------|---------------------------------------------|
| Felipe Ribeiro Salles de Camargo        | 565224  | 1TDSPY  | https://linkedin.com/in/felipe                 | https://github.com/felipe                    |
| João Victor Santana dos Santos          | 566063  | 1TDSPY  | https://linkedin.com/in/joao                   | https://github.com/joao                      |
| Leonardo Saavedra de Souza Campos       | 562229  | 1TDSA   | https://linkedin.com/in/leonardo               | https://github.com/Leonardo-Saavedra         |


## 11. Contato
- Felipe Ribeiro Salles de Camargo — RM 565224 — Turma 1TDSPY — TEAMS
- João Victor Santana dos Santos — RM 566063 — Turma 1TDSPY — TEAMS
- Leonardo Saavedra de Souza Campos — RM 562229 — Turma 1TDSA — TEAMS

## 12. Links Úteis (para avaliação)
- Repositório GitHub: https://github.com/SEU_USUARIO/SEU_REPO  
- Vídeo no YouTube: https://youtu.be/SEU_VIDEO_AQUI
# Cypress + Cucumber + POM – Automação Web e API

Este repositório contém **dois projetos de automação de testes** utilizando **Cypress**, **Cucumber (BDD)** e **Page Object Model (POM)**, desenvolvidos para fins de estudo, prática profissional e apresentação técnica.

Os projetos cobrem:

1. 🌐 **Automação Web** – Blog do Agibank  
2. 🔌 **Automação de API** – Dog CEO API

Ambos utilizam boas práticas adotadas em ambientes corporativos.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Cypress (v10+)
- Cucumber (BDD)
- JavaScript
- Page Object Model (POM)
- VS Code

---

## 📁 Estrutura Geral do Projeto

```bash
cypress/
 ├─ e2e/
 │   ├─ features/
 │   └─ step_definitions/
 ├─ pages/
 └─ support/
     ├─ e2e.js
     └─ commands.js
cypress.config.js
package.json
```

---

# 🌐 Projeto 1 – Automação Web (Blog Agibank)

## 🔗 Site testado

https://blog.agibank.com.br/

---

## 🎯 Objetivo

Validar funcionalidades críticas do blog, garantindo:

- Navegação correta
- Retorno de conteúdo
- Experiência básica do usuário

---

## 🧪 Cenários Automatizados

### 1️⃣ Pesquisa de artigos

Simula um usuário realizando uma busca no blog e valida se os resultados são exibidos corretamente.

### 2️⃣ Acesso por categoria

Usuário acessa uma categoria específica e valida se a lista de posts é carregada.

---

# 🔌 Projeto 2 – Automação de API (Dog CEO API)

## 🔗 API testada

https://dog.ceo/dog-api/documentation/

---

## 🧪 Cenários Automatizados

### 1️⃣ Listar todas as raças

Endpoint:
```
GET /api/breeds/list/all
```

### 2️⃣ Buscar imagens por raça

Endpoint:
```
GET /api/breed/{breed}/images
```

---

## ▶️ Como Executar o Projeto

```bash
npm install
npx cypress open
```

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e demonstração técnica em QA / Automação de Testes.

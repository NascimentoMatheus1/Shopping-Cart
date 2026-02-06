# 🛒 Carrinho de Compras - React

[Versão em Português](#-versão-em-português) | [English Version](#-english-version)

---

## 🇧🇷 Versão em Português

Este projeto é um simulador de e-commerce completo, focado no gerenciamento de rotas e estado global. A aplicação consome dados de uma API externa para listar produtos e permite que o usuário gerencie um carrinho de compras em tempo real.

### Visualização ao vivo 👉 [CLIQUE AQUI](https://shopping-cart-cyan-chi.vercel.app/) 

### 🚀 Tecnologias Utilizadas
- **React.js** (Hooks, Context API/State Lifting)
- **React Router Dom** (Navegação SPA)
- **FakeStore API** (Fonte de dados dos produtos)
- **CSS3 / Styled Components** (Estilização)

### 🛠️ Funcionalidades
- **Navegação Dinâmica:** Troca de páginas (Home, Loja, Carrinho) sem recarregar o navegador.
- **Loja Interativa:** Listagem de produtos com controles de quantidade (incremento/decremento).
- **Carrinho em Tempo Real:** O ícone na barra de navegação reflete a quantidade total de itens instantaneamente.
- **Gerenciamento de Pedidos:** Página do carrinho para revisar, alterar quantidades ou remover produtos antes de uma "finalização" simulada.

### 🧠 Conceitos Aplicados (Conexão UFBA)
- **SPA Architecture:** Configuração de redirecionamentos (Netlify/Vercel) para garantir que as rotas funcionem corretamente em produção.
- **Sincronização de Estado:** Desafio de manter o estado do carrinho consistente entre diferentes páginas da aplicação.

---

## 🇺🇸 English Version

This project is a complete e-commerce simulator focused on route management and global state synchronization. The application fetches data from an external API to list products and allows users to manage a shopping cart in real-time.

### Live preview 👉 [CLICK HERE](https://shopping-cart-cyan-chi.vercel.app/) 

### 🚀 Technologies Used
- **React.js** (Hooks, Context API/State Lifting)
- **React Router Dom** (SPA Navigation)
- **FakeStore API** (Product data source)
- **CSS3 / Modular Styling** (UI/UX)

### 🛠️ Features
- **Dynamic Navigation:** Seamless page transitions (Home, Shop, Cart) using client-side routing.
- **Interactive Shop:** Product listings with dedicated quantity controls (increment/decrement).
- **Real-time Cart:** The navbar icon reflects the total item count instantly as the user shops.
- **Order Management:** Dedicated cart page to review, modify quantities, or remove items.

### 🧠 Key Concepts Applied
Reflecting my academic background at **UFBA**, I focused on:
- **SPA Architecture:** Configuring server-side redirects (Netlify/Vercel) to handle client-side routing in a production environment.
- **State Synchronization:** The challenge of maintaining a single source of truth for the cart state across multiple decoupled components.

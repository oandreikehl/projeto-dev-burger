# 🍔 Dev Burger

O **Dev Burger** é uma aplicação web de pedidos de hambúrguer que permite visualizar, filtrar e manipular os produtos de forma dinâmica através de diferentes funcionalidades.

A aplicação utiliza **JavaScript** para trabalhar com os dados dos produtos e atualizar a interface de acordo com a ação selecionada pelo usuário.

---

## 🚀 Tecnologias utilizadas

<img src="https://github.com/oandreikehl/projeto-dev-burger/blob/master/assets/dev-burger.jpg?raw=true"/>

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="45px" alt="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45px" alt="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45px" alt="JavaScript"/>
</div>

### HTML5

Utilizado para estruturar a interface da aplicação, os produtos, botões e área de apresentação dos resultados.

### CSS3

Responsável pela estilização da interface, organização dos produtos e criação de um layout visual para a aplicação.

### JavaScript

Responsável pela lógica da aplicação, manipulação dos produtos, aplicação de descontos, cálculo do valor total, filtros e atualização dinâmica da interface.

---

## 🍔 Produtos disponíveis

A aplicação conta com seis opções de hambúrgueres:

- 🍔 X-Salada
- 🥓 X-Bacon
- 🥚 X-Bacon Egg
- 🍔 Monstruoso
- 🥬 Big Vegano
- 🌱 X-Vegan

---

## ✨ Funcionalidades

A aplicação possui quatro funcionalidades principais para manipulação dos produtos:

### 1. 🍔 Todos os produtos — `forEach()`

Ao clicar em **"Todos os Produtos"**, a aplicação percorre a lista completa de produtos utilizando o método `forEach()` e exibe todos os hambúrgueres disponíveis na interface.

```javascript
products.forEach((product) => {
    // Exibição dos produtos
});
```

São exibidos:

**X-Salada, X-Bacon, X-Bacon Egg, Monstruoso, Big Vegano e X-Vegan.**

---

### 2. 🏷️ Desconto — `map()`

A opção **"Desconto"** utiliza o método `map()` para criar uma nova lista de produtos com **10% de desconto**.

O valor apresentado na interface é atualizado e a descrição recebe a indicação:

> **Desconto de 10%**

```javascript
products.map((product) => {
    // Aplicação de 10% de desconto
});
```

O valor original dos produtos é preservado nos dados, enquanto o preço exibido ao usuário é atualizado com o desconto.

---

### 3. 💰 Valor Total — `reduce()`

A opção **"Valor Total"** utiliza o método `reduce()` para calcular a soma dos valores de todos os produtos **sem aplicar o desconto**.

O resultado é apresentado na própria interface, em uma seção abaixo da lista de produtos.

```javascript
products.reduce((acc, product) => {
    // Soma dos valores dos produtos
}, 0);
```

Dessa forma, o usuário consegue visualizar o **valor total de todos os produtos disponíveis**.

---

### 4. 🌱 Veganos — `filter()`

A opção **"Veganos"** utiliza o método `filter()` para filtrar a lista de produtos e exibir somente as opções veganas.

```javascript
products.filter((product) => {
    // Filtragem dos produtos veganos
});
```

Ao selecionar essa opção, a interface apresenta apenas:

- 🥬 Big Vegano
- 🌱 X-Vegan

---

## 🔄 Funcionamento

```text
                 🍔 DEV BURGER
                       │
             ┌─────────┼─────────┐
             │         │         │
             ▼         ▼         ▼
        forEach()    map()    reduce()
             │         │         │
             ▼         ▼         ▼
       Todos os      10% de    Valor total
        produtos     desconto
             │
             │
             └──────────┐
                        ▼
                     filter()
                        │
                        ▼
                  🌱 Produtos
                     veganos
```

---

## 🧠 Métodos JavaScript utilizados

| Método | Função no projeto |
|---|---|
| `forEach()` | Percorre e exibe todos os produtos |
| `map()` | Aplica 10% de desconto aos produtos |
| `reduce()` | Soma o valor de todos os produtos |
| `filter()` | Filtra e exibe somente os produtos veganos |

---

## 📱 Interface

A aplicação apresenta os produtos de forma dinâmica, permitindo que o conteúdo exibido seja alterado de acordo com a opção selecionada pelo usuário, sem a necessidade de recarregar a página.

---

## 🛠️ Estrutura do projeto

```text
Dev-Burger/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ scripts.js
└── 🖼️ assets/
```

---

## 🎯 Destaques

- 🍔 Catálogo de produtos
- 🔄 Manipulação dinâmica dos dados
- 🏷️ Aplicação de desconto de 10%
- 💰 Cálculo do valor total
- 🌱 Filtro de produtos veganos
- ⚡ Atualização dinâmica da interface
- `forEach()` para percorrer produtos
- `map()` para aplicar descontos
- `reduce()` para calcular o total
- `filter()` para filtrar produtos

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Andrei Kehl**.


# Estoque Loja NodeJS

Criei um sistema de estoque de uma loja, em que é possivel adicionar  um novo produto , atualizar e deletar.
consumindo dados através da api que construi em NodeJs com ExpressJs.
Link do repositório do FrontEnd 👉 https://github.com/rodrigoaveloes/Store_Stock-FrontEnd_reactJS 




## Instalação

Instale Store_Stock-Backend com npm

```bash
  npm install Store_Stock-APi-nodeJs

  cd Store_Stock-APi-nodeJs

```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/rodrigoaveloes/Store_Stock-APi-nodeJs
```

Entre no diretório do projeto

```bash
  cd Store_Stock-APi-nodeJs
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run-dev // porta padrão http://localhost:4000/
```

```bash

  Repositorio FrontEnd 👉 https://github.com/rodrigoaveloes/Store_Stock-FrontEnd_reactJS

```


## Stack utilizada

**Front-end:** React, TailwindCSS, Vite, Typescript, React hook form & React Router Dom

**Back-end:** Node, ExpressJs & Sequelize como ORM e MySql como banco de dados


## Documentação da API

#### Retorna todos os produtos

```http
  GET /api/produtos
```


#### Pegando apenas um produto

```http
  GET /api/produto/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |






#### Deletando produto

```http
  DELETE /api/produto/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |




#### Adicionando um novo produto

```http
  POST /api/adicionarproduto
```



#### Atualizando produto

```http
  PUT /api/produto/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

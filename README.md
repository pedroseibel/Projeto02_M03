# Projeto 2 - Integração Backend + Mongo Atlas + Heroku

Este é o segundo projeto do terceiro módulo da Blue EdTech que consiste em integrar backend (Node.js + Express.js) com Mongo Atlas e Heroku. 



# **Sobre o projeto**

O projeto consiste em 3 rotas principais e 5 subrotas. 



Temos as rotas

` /cities` 

` /states` 

` /countries` 



Cada uma com 5 subrotas

` GET /listall` 

Retorna um array com todos os registros. 

```
  {
    "_id": "618fc930cb57e933363576e9",
    "name": "Porto Alegre",
    "districtQty": 81,
    "population": 1400000,
    "anniversary": "1772-03-26T05:15:00.620Z"
  }
```

- Status Code: 200.



` GET /listname/:name` 

Retorna um registro pelo seu nome. 

- Status Code: 200.
- Status Code: 404.



` POST /add` 

Cria um novo registro.

```
{
    "name": "Porto Alegre",
    "districtQty": 81,
    "population": 1400000,
    "anniversary": 17720326
}
```

- Status Code: 200.



` PUT /update/:id` 

Atualiza um registro pelo id. 

- Status Code: 200.
- Status Code: 400. 



` DELETE /delete/:id` 

Deleta um registro pelo id.

- Status Code: 200.
- Status Code: 400.

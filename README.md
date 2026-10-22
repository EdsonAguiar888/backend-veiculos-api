# CRUD de Veículos com Node.js

Projeto simples usando Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── veiculoController.js
├── models/
│   └── Veiculo.js
├── routes/
│   └── veiculoRoutes.js
└── server.js
```

## Executar

```bash
npm install
cp .env.example .env
npm run dev
```

É necessário ter o MongoDB rodando localmente.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /veiculo | Lista Veículos |
| GET | /veiculo/:id | Busca um Veículo |
| POST | /veiculo | Cria um Veículo |
| PUT | /veiculo/:id | Atualiza um Veículo |
| DELETE | /veiculo/:id | Exclui um Veículo |

## Exemplo de JSON

```json
{
  "nome": "Uno",
  "marca": "fiat",
  "ano": 2001
}
```

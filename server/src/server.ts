import express, { response } from 'express'

const app = express()

// adicionando rota /ads
app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1, name: 'Anuncio 1'
    },
    {
      id: 1, name: 'Anuncio 2'
    },
    {
      id: 1, name: 'Anuncio 6'
    }
  ])
})

// porta para acessar a aplicação em desenvolvimento
app.listen(3333)
import  jsonServer  from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(router)

server.use((req, res,) => {
  if (req.method === 'POST') {
    req.createdAt = server.use(jsonServer.rewriter({"/clientes/create": `/clientes/${req.id}`}))
  }
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})

fetch('http://localhost:3000/')
  .then((res)=> res.json())
  .then((resultado) => resultado.use(jsonServer.rewriter('./routes.json')))

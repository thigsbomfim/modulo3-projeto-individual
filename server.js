import  jsonServer  from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(router)

server.use(jsonServer.rewriter('routes.json'))

server.use((req, res,) => {
  if (req.method === 'POST') {
    req.createdAt = server.use(jsonServer.rewriter({"/clientes/create": `/clientes/${req.id}`}))
  }
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})

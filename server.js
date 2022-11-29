import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = 5173
server.use(middlewares)
server.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})
server.use(jsonServer.rewriter({
  "/produtos/wheyprotein": "/produtos?tipo_like=whey",
    "/produtos/creatina": "/produtos?tipo_like=creatina",
    "/produtos/vitaminas": "/produtos?tipo_like=vitamina",
    "/produtos/pre-treino": "/produtos?tipo_like=pre-treino",
    "/produtos/acessorios": "/produtos?tipo_like=acessorios",
    "/produtos/wheyprotein/Whey-Protein-Basic": "/produtos/1",
    "/produtos/wheyprotein/Whey-Protein-Concentrado": "/produtos/2",
    "/produtos/wheyprotein/Whey-Protein-Isolado": "/produtos/3",
    "/produtos/wheyprotein/Whey-Protein-Hidrolisado": "/produtos/4",
    "/produtos/creatina/Creatina-Monohidratada-100g": "/produtos/5",
    "/produtos/creatina/Creatina-Monohidratada-100g-Creapure": "/produtos/6",
    "/produtos/creatina/Creatina-Monohidratada-250g": "/produtos/7",
    "/produtos/creatina/Creatina-Monohidratada-250g-Creapure": "/produtos/8",
    "/produtos/vitamina/Vitamina-C": "/produtos/9",
    "/produtos/vitamina/Oleo-de-Peixe-Omega-3": "/produtos/10",
    "/produtos/vitamina/Multivitaminico": "/produtos/11",
    "/produtos/vitamina/Oleo-de-Peixe-Ultra": "/produtos/12",
    "/produtos/pre-treino/Pre-treino-Challenger": "/produtos/13",
    "/produtos/pre-treino/Pre-Treino-Haze-Hardcore": "/produtos/14",
    "/produtos/pre-treino/Pre-treino-Insanity": "/produtos/15",
    "/produtos/pre-treino/Pre-treino-GFOCUS": "/produtos/16",
    "/produtos/acessorio/Coqueteleira-600ml": "/produtos/17",
    "/produtos/acessorio/Coqueteleira-3-compartimentos-com-MixBall-600ml": "/produtos/18",
    "/produtos/acessorio/Galao-Preto-2-Litros": "/produtos/19",
    "/produtos/acessorio/Balanca-de-cozinha": "/produtos/20"
  }))
server.use(router)

server.listen(port, ()=>{
  console.log('Servidor iniciado na porta http://localhost:5173')
})

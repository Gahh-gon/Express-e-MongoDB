 import express from 'express';
 import connectDataBase from './config/dbConnect.js';

 const conexao = await connectDataBase();
  
 conexao.on("error",(erro) =>{
   console.error("Erro de conexão com o banco de dados", erro);
  
 })
 conexao.once("open",() =>{
   console.log("Conexão com o banco de dados estabelecida com sucesso");  // imprime no console a mensagem quando o server está rodando
 })
 const app = express(); 
app.use(express.json());
 const livros = [
   {
      id: 1,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien'
   },
   {
      id: 2,
      titulo: 'A Game of Thrones',
      autor: 'George R. R. Martin'
   }
 ]
 function buscarLivroId(id){
   return livros.findIndex(livros =>{
     return livros.id === Number(id);
   })
 }
 app.get('/', (req, res) =>{
    res.status(200).send('Hello World')
 });
 app.get('/listLivros', (req, res) =>{
   res.status(200).json(livros)
});
app.get('/Livro/:id', (req, res) =>{
   const id = buscarLivroId(req.params.id);
   res.status(200).json(livros[id])
});
app.post('/listlivros', (req, res) =>{
livros.push(req.body);
res.status(201).send("livro cadastrado com sucesso")
});

app.put('/listlivros/:id', (req, res) =>{
   const id = buscarLivroId(req.params.id);
   livros[id].titulo = req.body.titulo;
   res.status(200).json(livros[id])
});
app.delete("/listlivros/:id", (req,res)=>{
   const id = buscarLivroId(req.params.id);
   livros.splice(id, 1);
   res.status(200).send("Livro removido com sucesso");
})
 export default app;
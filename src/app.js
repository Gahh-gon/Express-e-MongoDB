 import express from 'express';
 const app = express(); 

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
 app.get('/', (req, res) =>{
    res.status(200).send('Hello World')
 });
 app.get('/listLivros', (req, res) =>{
   res.status(200).json(livros)
});
 
 export default app;
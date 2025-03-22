 import express from 'express';
 import connectDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

 const conexao = await connectDataBase();
  
 conexao.on("error",(erro) =>{
   console.error("Erro de conexão com o banco de dados", erro);
  
 })
 conexao.once("open",() =>{
   console.log("Conexão com o banco de dados estabelecida com sucesso");  // imprime no console a mensagem quando o server está rodando
 })
 const app = express(); 
routes(app)
 
 
app.delete("/listlivros/:id", (req,res)=>{
  
})
 export default app;
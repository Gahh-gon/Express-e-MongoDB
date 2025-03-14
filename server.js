//import http from "http";
import "dotenv/config"
import app from "./src/app.js";

 
const PORT = 3000

//const rotas = {
    //"/":"Curso de Node.js",
    //"/livros":"Entrei na rota livros",
    //"/autores":"Entrei na rota autores",
  
//};
//metodos

// const server  = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type": "text/plain"});
//     res.end(rotas[req.url]);
// }) 
app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta 3000");  // imprime no console a mensagem quando o server está rodando
}) 
import livro from "../models/livros.js";

class LivroController {
static async listarLivro(req,res){
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros)
};
static async cadastrarLivro (req, res) { 
    livro.push(req.body);
   
    try{
        const novoLivro = await livro.create(req.body)
        res.status(201).json({message:"criando com sucesso", livro:novoLivro})
    }catch(erro){
        res.status(500).json({message:`${erro.message} - falha ao cadastrar livro`})
    }
}

}

export default LivroController; 
import livro from "../models/livros.js";

class LivroController {
static async listarLivros(req,res){
    try{
        const listaLivros = await livro.find({});
        res.status(200).json({message:"Livros Listados com sucesso",livro:listaLivros})
    }catch(err){
        res.status(500).json({message:`${err.message} - falha ao listar livros`})
    }
    
};
static async listarLivroPorId(req,res){
    try{
        const id = req.params.id;
      
        const LivroEncontr = await livro.findById(id);
        res.status(200).json({message:"Livro encotrando com sucesso",livro:LivroEncontr})
    }catch(err){
        res.status(500).json({message:`${err.message} - falha ao encontrar livro`})
    }
    
};
static async AtualizarLivro(req,res){
    try{
        const id = req.params.id;
      
     await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"Livro atualizado",livro:LivroEncontr})
    }catch(err){
        res.status(500).json({message:`${err.message} - falha na atualização`})
    }
    
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
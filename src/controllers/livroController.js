import livro from "../models/livros.js";

class LivroController {
static async listarLivro(req,res){
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros)
}
}

export default LivroController; 
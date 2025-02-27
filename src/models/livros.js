import mongoose, { Types } from "mongoose";

const livrosSchema = new mongoose.Schema({
    id:{Type: mongoose.Types.ObjectId},
    titulo: {Type: String, required: true},
    autor: {Type: String},
    editora:{Type: String},
    preco:{Type: Number},
    paginas: {Type: Number}
},{versionKey:false})

const livro = mongoose.model("livros",livrosSchema)

export default livro;
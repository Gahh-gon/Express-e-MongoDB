import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/listLivros', LivroController.listarLivros);
routes.get('/listLivros/:id', LivroController.listarLivroPorId);
routes.put('/listLivros/:id', LivroController.AtualizarLivro)
routes.post('/listlivros', LivroController.cadastrarLivro)
routes.delete('/listlivros/:id', LivroController.deletarLivro)

export default routes;